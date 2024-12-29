import { BedStatus, PrismaClient as hospitalPrismaClient, QueueStatus, VisitType} from "../prisma/generated/hospitalClient/index.js";
import { PrismaClient as centralPrismaClient } from "../prisma/generated/central/index.js";
import { insertPatient, queue } from "../queue.js";
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
        insertPatient(patientqueue);
        console.log(queue);
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
        // let ward = [];
        // for(i of wards){
        //     let temp = []
        //     temp.push(i.id);
        //     temp.push(i.name);
        //     ward.push(temp)
        // }
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

export const getIntimated = async(req,res)=>{
    const prisma = req.prisma;
    try{
        const currentDate = new Date();
        const currentDateString = currentDate.toISOString().split('T')[0];
        const currentTimeString = currentDate.toTimeString().split(' ')[0];
        const checkins = await prisma.intimation.findMany({
            where: {
                OR: [
                    {
                        date: {
                            gt: currentDateString,
                        }
                    },
                    {
                        date: currentDateString,
                        time: {
                            gte: currentTimeString,
                        }
                    }
                ]
            },
            orderBy: [
                {
                    date: 'asc'
                },
                {
                    time: 'asc'
                }
            ]
        });
        console.log(checkins)
        return res.status(200).json({checkins})
    }catch(err){
        console.log(err);
        return res.status(500).json({message:err})
    }
}


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


export {getDoctors,addDepartments,getDepartments,createPatientInstance,addWard,getAdmissionsBedNotAllocated,allocateBed,getPatient,getWard}
