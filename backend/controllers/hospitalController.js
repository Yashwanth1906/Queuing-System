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
                age:age,
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
                wardId:true,
                patientId:true,
            }
        })
        res.json({success:true,patients:unAllocated})
    }catch(err){
        console.log(err)
        res.json({success:false,message:err})
    }
}

const allocateBed = async(req,res) =>{
    const prisma = req.prisma;
    try{
        const adm = await prisma.admission.findUnique({
            where:{
                id:req.headers.admissionId
            },select:{
                wardId:true,
                bedId:true
            }
        })
        const availableBed = await prisma.bed.findFirst({
            where:{
                wardId:adm.wardId,
                status:BedStatus.Available
            }
        })
        if(!availableBed){
            return res.json({success:false,message:"No Bed available"});
        }
        adm.bedId = availableBed.id;
        availableBed.status = BedStatus.Occupied
        res.json({success:true,bed:availableBed})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}
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



// const bedRequest = async(req,res)=>{
//     try{
//         const 
//     }catch(er){
//         console.log(er);
//         res.json({success:false,message:err})
//     }
// }

export {getDoctors,addDepartments,getDepartments,createPatientInstance,addWard,getAdmissionsBedNotAllocated,allocateBed,getPatient}