import { BedStatus, PrismaClient as hospitalPrismaClient, QueueStatus, VisitType} from "../prisma/generated/hospitalClient/index.js";
import { PrismaClient as centralPrismaClient } from "../prisma/generated/central/index.js";
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

const addDepartments = async(req,res)=>{
    console.log("hi")
    const prisma = req.prisma;
    const deparmentss = req.body.departments;
    console.log(deparmentss)
    try{
        const added = await Promise.all(deparmentss.map(async (x) => {
            const department = await prisma.departments.create({
                data: {
                    name: x.name,
                    headOfDepartmentId: "1",
                },
            });
            return department;
        }));
        res.json({success:true,data:added})
    }catch(er){
        console.log(er);
        res.json({success:false,message:err})
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
        })
        res.json({success:true,departments:depts})

    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

const createPatientInstance = async(req,res)=>{
    const prisma = req.prisma;
    try{
        const {abhaId,doctorId,queueNumber,visitType,age,gender,reason,name} = req.body;
        const patientInstance = await prisma.patientInstance.create({
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
        const patientqueue = await prisma.oPDQueue.create({
            data:{
                patientInstanceId:abhaId,
                doctorId:doctorId,
                status:QueueStatus.Pending,
                queueNumber:queueNumber
            }
        })
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
                totalBeds:totalBeds,
                availableBeds:totalBeds
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

// const bedRequest = async(req,res)=>{
//     try{
//         const 
//     }catch(er){
//         console.log(er);
//         res.json({success:false,message:err})
//     }
// }


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

export {getDoctors,addDepartments,getDepartments,createPatientInstance,addWard,getAdmissionsBedNotAllocated,allocateBed,getPatient,getWard}