import { BedStatus, PrismaClient as hospitalPrismaClient, QueueStatus, VisitType} from "../prisma/generated/hospitalClient/index.js";
import { PrismaClient as centralPrismaClient } from "../prisma/generated/central/index.js";
import QueueManager from "../queue.js";
import { formatDateToDDMMYYYY } from "./patientController.js";
import fs from "fs"
import csvParser from "csv-parser";
const centralPrisma = new centralPrismaClient({
    datasources:{
        db:{
            url:process.env.CENTRAL_DB_URL
        }
    }
})
const getDoctors = async(req,res)=>{
    const prisma = req.prisma;
    const {id} = req.body;
    try{
        const doctors = await prisma.doctors.findMany({})
        res.json({success:true,message:doctors})
    }catch(err)
    {
        console.log(err)
        res.json({success:false})
    }
}

export const getOnlineDoctors=async(req,res)=>{
    try{
        const prisma=req.prisma;
        const {hosCode}=req.body
        const docs=await prisma.doctors.findMany({
            where:{
                hospitalCode:hosCode,
                active:true
            }
        })
	console.log(docs);
        return res.status(200).json({docs})
    }
    catch{
        return res.status(500).json({msg:"error"});
    }
}

export const addSlot=async(req,res)=>{
	try{
		const prisma=req.prisma;
		const {date,deptid,count}=req.body;
		const data=await prisma.OPSlots.create({
			data:{
				date,
				slot:"08:00-12:00",
				count,
				deptid,
			}
		})
		return res.status(200).json({data});
	}
	catch(e){
		console.log(e)
		return res.status(500).json({msg:"error"});
	}
}

const addDepartments = async(req,res)=>{
    const prisma = req.prisma;
    try{
        const data = req.body;
        const added = await prisma.departments.create({
            data:{
                name : data.name
            }
        });
        res.json({success:true,message:"Successfully created",department:added})
    }catch(er){
        console.log(er);
        res.json({success:false,message:er})
    }
}

const getDepartments = async(req,res)=>{
    const prisma = req.prisma;
    try{
        const depts = await prisma.departments.findMany({
            select:{
                id:true,
                name:true
            }
        });
        res.json({success:true,departments:depts})

    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}


function formatTimeToHHMM(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0'); 

    return `${hours}:${minutes}`;
}


const createPatientInstance = async(req,res)=>{
    const prisma = req.prisma;
    try{
        const {abhaId,doctorId,queueNumber,visitType,age,gender,reason,name,intimated} = req.body;
        const patientInstance = await prisma.PatientInstance.create({
            data:{
                abhaId:abhaId,
                doctorId:doctorId,
                queueNumber:queueNumber + 1,
                visitType: (visitType === "FreshVisit") ? VisitType.FreshVisit : VisitType.Revisit,
                age:parseInt(age),
                Gender:gender,
                reason:reason,
                name:name
            }
        })
        let pqno=5;
        if(intimated)
        {
            pqno=10;
        }
        const timee=formatTimeToHHMM(new Date());
        const patientqueue = await prisma.oPDQueue.create({
            data:{
                patientInstanceId:abhaId,
                doctorId:doctorId,
                status:QueueStatus.Pending,
                queueNumber:queueNumber,
                intimated,
                priority:pqno,
                demotion:0,
                timeStamp:timee
            }
        })
        const queue=QueueManager.getInstance();
        queue.insertPatient(patientqueue);
     
        console.log(patientInstance,patientqueue);
        res.json({success:true,patientInstance:patientInstance,patientqueue:patientqueue})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

const addWard = async(req,res)=>{
    const prisma = req.prisma;
    try{
        const {name,totalBeds} = req.body;
        const newWard = await prisma.ward.create({
            data:{
                name:name,
                totalBeds:parseInt(totalBeds),
                availableBeds:parseInt(totalBeds)
            }
        })
        const bedData = [];
        for(let i=1;i<=totalBeds;i++){
            const bedNumber = `${name.substring(0,2).toUpperCase()}${i}`;
            bedData.push({
                bedNumber:bedNumber,
                wardId:newWard.id,
                status: BedStatus.Available
            })
        }
        const beds = await prisma.bed.createMany({
            data: bedData
        })
        console.log(beds)
        res.json({success:true,ward:newWard,beds:beds})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

const getAdmissionsBedNotAllocated = async(req,res)=>{
    const prisma = req.prisma;
    try{
        const unAllocated = await prisma.admission.findMany({
            where:{
                bedId:null
            },select:{
                id:true,
                ward:{
                    select:{
                    name:true
                    }
                },
                patientId:true,
                patinet:{
                    select:{
                        name:true,
                        reason:true
                    }
                },
                doctor:{
                    select:{
                        name:true
                    }
                }
            }
        })
        res.json({success:true,patients:unAllocated})
    }catch(err){
        console.log(err)
        res.json({success:false,message:err})
    }
}

const allocateBed = async (req, res) => {
    const prisma = req.prisma;
    try {
      const { admissionId } = req.body;
      const adm = await prisma.admission.findUnique({
        where: { id: admissionId },
        select: { wardId: true },
      });
      []
      if (!adm) {
        return res.json({ success: false, message: "Admission not found" });
      }

      const availableBed = await prisma.bed.findFirst({
        where: { wardId: adm.wardId, status: BedStatus.Available },
        select: { id: true, bedNumber: true },
      });
  
      if (!availableBed) {
        return res.json({ success: false, message: "No bed available" });
      }
      await prisma.admission.update({
        where: { id: admissionId },
        data: { bedId: availableBed.id },
      });
  
      await prisma.bed.update({
        where: { id: availableBed.id },
        data: { status: BedStatus.Occupied },
      });
  
      res.json({ success: true, bed: availableBed });
    } catch (err) {
      console.log(err);
      res.json({ success: false, message: err.message });
    }
  };
  
const getPatient = async(req,res)=>{
    const prisma = req.prisma;
    console.log(req.headers.abhaid)
    try{
        const patient = await prisma.patientInstance.findUnique({
            where:{
            abhaId:req.headers.abhaid
            },select:{
                abhaId:true,
                name:true,
                age:true,
                Gender:true,
                reason:true
            }
        })
        res.json({success:true,patient:patient})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

const getWard = async(req,res) =>{
    const prisma = req.prisma;
    console.log(req.headers.code);
    console.log("getWard")
    try{
        const wards = await prisma.ward.findMany({
            select:{
                id:true,
                name:true
            }
        });
        res.json({success:true,ward:wards})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err});
    }
}

export const getHosCodes = async(req,res)=>{
    try{
        const hosCodes = await centralPrisma.hospital.findMany({
            select:{
                code:true,
                name:true
            }
        })
        let hospital = [];
        for(let i of hosCodes){
            hospital.push(i)
        }
        console.log(hospital)
        return res.status(200).json({hosCodes:hospital})
    }catch(err){
        console.log(err);
        return res.status(500).json({message:err})
    }
}

// export const getIntimated = async(req,res)=>{
//     const prisma = req.prisma;
//     try{
//         const date=formatDateToDDMMYYYY(new Date());
// 		const time=formatTimeToHHMM(new Date());
//         const checkins = await prisma.intimation.findMany({
//             where: {
//                 OR: [
//                     {
//                         date: {
//                             gt: date,
//                         }
//                     },
//                     {
//                         date: date,
//                         time: {
//                             gte: time,
//                         }
//                     }
//                 ]
//             },
//             orderBy: [
//                 {
//                     date: 'asc'
//                 },
//                 {
//                     time: 'asc'
//                 }
//             ]
//         });
//         console.log(checkins)
//         return res.status(200).json({checkins})
//     }catch(err){
//         console.log(err);
//         return res.status(500).json({message:err})
//     }
// }

export const getIntimated = async (req, res) => {
    const prisma = req.prisma;
    try {
        const currentDate = new Date();
        const todayISO = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD
        const currentTime = currentDate.toTimeString().slice(0, 5); // HH:MM

        const checkins = await prisma.intimation.findMany({
            where: {
                OR: [
                    {
                        date: {
                            gt: todayISO, // All slots greater than today
                        }
                    },
                    {
                        date: todayISO, // Slots for today, but time >= now
                        time: {
                            gte: currentTime,
                        }
                    }
                ]
            },
            orderBy: [
                { date: 'asc' },
                { time: 'asc' }
            ]
        });
        const ogCheckins = [];
        for (let i = 0; i < checkins.length; i++) {
            const checkin = checkins[i];
            console.log(checkin);
        
            const patient = await centralPrisma.patient.findUnique({
                where: { abhaId: checkin.abhaId },
                select: { name: true },
            });
            let department;
            if(checkin.deptId){
                department = await prisma.departments.findUnique({
                    where: { id: checkin.deptId },
                    select: { name: true },
                });
            }
            console.log("Patient : "+patient)
            ogCheckins.push({
                ...checkin,
                patientName: patient?.name || null,
                departmentName: department?.name || null,
            });
        }
        console.log(ogCheckins)
        return res.status(200).json({ checkins:ogCheckins });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message });
    }
};



export const getHospital = async(req,res) =>{
    try{
        const hospitals = await centralPrisma.hospital.findMany({
            select:{
                name:true,
                code:true,
                location:true,
                city:true,
                state:true
            }
        });
        return res.json({hospitals:hospitals,success:true})
    } catch(e){
        console.log(e);
        return res.json({success:false,error:e})
    }
}

export const getHospitalDetails = async (req, res) => {
  try {
    const prisma = req.prisma;
    const { hospitalCode } = req.params;

    const departments = await prisma.departments.findMany({
      select: {
        id: true,
        name: true,
        doctors: {
          select: { id: true },
        },
      },
    });

    const departmentDetails = departments.map((department) => ({
      id: department.id,
      name: department.name,
      doctors: department.doctors.length,
    }));

    const doctors = await prisma.doctors.findMany({
      select: {
        id: true,
        name: true,
        designation: true,
        department:{
            select:{
                name:true
            }
        }
      },
    });

    const doctorDetails = doctors.map((doctor) => ({
      id: doctor.id,
      name: doctor.name,
      specialization: doctor.designation,
      department : doctor.department.name
    }));

    const wards = await prisma.ward.findMany({
      select: {
        id: true,
        name: true,
        totalBeds: true,
        availableBeds: true,
      },
    });

    const wardDetails = wards.map((ward) => ({
      id: ward.id,
      name: ward.name,
      totalBeds: ward.totalBeds,
      availableBeds: ward.availableBeds,
    }));
    res.json({
      success: true,
        departments: departmentDetails,
        doctors: doctorDetails,
        wards: wardDetails,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to fetch hospital details.",
    });
  }
};


function getDayOfWeek(date) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getDay()];
  }
  
  
  function add(prisma)
  {
    const records = [];
    let filePath="/home/shiva_18/hackathon/Hospital-Management-System/backend/synthetic_data_2018_2023.csv"
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (row) => {

        records.push({
          date: row.Date,
          day: row.Day,
          holiday: row.Holiday === '1', // Convert '1' to true, '0' to false
          specialEvent: row['Special Event'] === '1', // Convert '1' to true, '0' to false
          noofpatients: parseInt(row['Number of patients'], 10),
          noofdoctors: parseInt(row['Number of doctors'], 10),
          time: parseFloat(row.Time),
          ppdh: parseFloat(row.PPDH),
          weather: row.Weather,
          department: "General" // Default department for now; adjust as needed
        });
      })
      .on('end', async () => {
        console.log('CSV file successfully processed');
        try {
          // Insert data into the database
          await prisma.OPData2.createMany({
            data: records,
            skipDuplicates: true, // Avoid inserting duplicate records
          });
  
          console.log('Data imported successfully');
        } catch (error) {
          console.error('Error importing data:', error);
        } finally {
          await prisma.$disconnect();
        }
      });
  }



export const getTmrwDocPred=async(req,res)=>{
    // await req.prisma.OPData2.deleteMany({})

    // add(req.prisma)
    try{
        const {dept,isSpec}=req.body;
        const prisma =req.prisma;
        const tmrw=getDayOfWeek(new Date());
        console.log(req.body)
        // console.log(tmrwholiday)

        const totppdh=await prisma.OPData2.findMany({
            where:{
                department:dept,
                specialEvent:isSpec,
                day:tmrw

            }
        });
        console.log(totppdh);
        let denm=totppdh.length;
        console.log(denm)
        if(denm===0)
        {
            console.log(denm)
            return res.status(200).json({doc:0});
        }
        let tot=0;
        let totpat=0;
        for(let i=0;i<totppdh.length;i++)
        {
            tot+=Math.ceil(totppdh[i].ppdh);
            totpat+=totppdh[i].noofpatients
        }
        totpat/=denm;
        console.log(totpat)
        let ppdh=(tot/denm);
        let doc=totpat/(ppdh*4)
        console.log(doc);

        return res.status(200).json({msg:doc});


    }
    catch(e){
        console.log(e);
        return res.status(500).json({msg:"error"});


    }

  



}


// export const allocateDoctor = async(req,res)=>{
//     try{
//         const {deptId} = req.body;
//         console.log(deptId)
//         const  prisma = req.prisma;
//         const doctors = await prisma.departments.findUnique({
//             where:{
//                 id:deptId
//             },select:{
//                 doctors:{
//                     select:{
//                         opdQueue:true
//                     }
//                 }
//             }
//         })
//         console.log(doctors)
//         let minQueueDoctor = doctors[0];
//         for (const doctor of doctors) {
//             if (doctor.opdQueue.queueNumber < minQueueDoctor.opdQueue.queueNumber) {
//                 minQueueDoctor = doctor;
//             }
//         }
//         res.json({success:true,doctor:minQueueDoctor});
//     } catch(e){
//         console.log(e);
//         res.json({success:false,message:e})
//     }
// }
export const allocateDoctor = async (req, res) => {
    try {
        const { deptId } = req.body;
        console.log(deptId);

        const prisma = req.prisma;

        // Fetch doctors and their opdQueue for the given department
        const department = await prisma.departments.findUnique({
            where: {
                id: deptId,
            },
            select: {
                name : true,
                doctors: {
                    select: {
                        id: true,
                        name : true,
                        opdQueue: {
                            select: {
                                queueNumber: true,
                            },
                        },
                    },
                },
            },
        });

        if (!department || !department.doctors.length) {
            return res
                .status(404)
                .json({ success: false, message: "No doctors found for this department" });
        }

        // Find the doctor with the minimum queue length
        let minQueueDoctor = department.doctors[0];
        let minQueueLength = minQueueDoctor.opdQueue.length;

        for (const doctor of department.doctors) {
            const queueLength = doctor.opdQueue.length;
            if (queueLength < minQueueLength) {
                minQueueDoctor = doctor;
                minQueueLength = queueLength;
            }
        }

        console.log("Doctor with minimum queue:", minQueueDoctor);

        res.json({
            success: true,
            doctor: {
                name : minQueueDoctor.name,
                id: minQueueDoctor.id,
                queueLength: minQueueLength,
                deptName : department.name
            },
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ success: false, message: e.message });
    }
};


export const getDepartmentByName = async(req,res) =>{
    try{
        const prisma = req.prisma;
        const {departmentName} = req.body;
        const department = await prisma.departments.findMany({
            where:{
                name : departmentName
            }
        })
        console.log(department);
        res.json({success:true,deptId:department[0].id})
    } catch(e){
        console.log(e);
        res.json({success:false,error:e})
    }
}

export {getDoctors,addDepartments,getDepartments,createPatientInstance,addWard,getAdmissionsBedNotAllocated,allocateBed,getPatient,getWard}
