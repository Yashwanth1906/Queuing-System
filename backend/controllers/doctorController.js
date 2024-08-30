import bcrypt from "bcryptjs"
import validator from "validator";
import jwt from "jsonwebtoken";
import { DesignationType, PrismaClient, QueueStatus } from "../prisma/generated/hospitalClient/index.js";
const prisma = new PrismaClient({
    datasources:{
        db:{
            url:"postgres://avnadmin:AVNS_5qb24Cru8rsqoTnQMap@pg-37f71f7d-shreecharan215-d1dd.b.aivencloud.com:13070/defaultdb?sslmode=require"
        }
    }
})
prisma.oPDQueue.create({
    data:{
        status:QueueStatus
    }
})
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

const doctorRegister = async(req,res)=>{
    const prisma = req.prisma;
    const {name,contact,email,password,departmentId,gender,designation} = req.body;
    try{
        if(password.length < 8){
            res.json({success:false,message:"Weak Password"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(password,salt);
        let design = "";
        let hod = false;
        if(designation == "Trainee"){
            design = DesignationType.Trainee
        }else if(designation == "Assistant"){
            design = DesignationType.Assistant
        }
        else if(designation == "Senior"){
            design = DesignationType.Senior
        }
        else{
            design = DesignationType.HeadOfDepartment;
            hod = true;
        }
        const newDoctor = await prisma.doctors.create({
            data:{
                name,contact,email,password:hashedPass,departmentId,active:true,
                gender:gender,designation:design
            }
        })
        if(hod == true){
            const department = await prisma.department.update({
                where:{
                    id:departmentId
                },data:{
                    headOfDepartmentId : newDoctor.id
                }
            })
        }
        const token = createToken(newDoctor.id);
        res.json({success:true,doctor:newDoctor,token:`Bearer ${token}`})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

const doctorLogin = async(req,res)=>{
    const prisma = req.prisma;
    try{
        const {email,password} = req.body;
        console.log("email "+email)
        const doctor = await prisma.doctors.findUnique({
            where:{
                email :email
            },select:{
                id:true,password:true
            }
        })
        if(!doctor){
            res.json({success:false,message:"Doctor not found"})
        }
        const passVerify = await bcrypt.compare(password,doctor.password);
        if(!passVerify){
            res.json({success:false,message:"Incorrect Password"});
        }
        const token = createToken(doctor.id);
        res.json({success:true,token:`Bearer ${token}`})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

const getQueuedPatients = async(req,res) =>{
    const prisma = req.prisma;
    const doctorId = req.headers.id;
    try{
        const patients = await prisma.oPDQueue.findMany({
            where:{
                doctorId:doctorId
            },select:{
                patientInstance:{
                    select:{
                        abhaId :true,
                        age:true,
                        Gender:true,
                        reason:true,
                        name:true
                    },
                },
                status:true,
                queueNumber:true
            }
        })
        res.json({success:true,patients:patients})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

const addMedications = async(req,res)=>{
    const prisma = req.prisma;
    try{
        const {medications,abhaid,feedback} = req.body;
        const patient = await prisma.patientInstance.update({
            where:{
                abhaId : abhaid
            },
            data:{
                medications:medications,
                feedback:feedback
            },
        })
        const op = await prisma.oPDQueue.update({
            where:{
                patientInstanceId : abhaid
            },data:{
                status:QueueStatus.Completed,
            }
        })
        res.json({success:true,message:patient})
    }catch(err){
        console.log(err);
        res.json({success:false,mesage:err})
    }
}

const createAdmission = async(req,res)=>{
    const prisma = req.prisma;
    try{
        const {abhaId,wardId} = req.body;
        const newAdmission = await prisma.admission.create({
            data:{
                patientId:abhaId,
                wardId:wardId,
                doctorId:req.headers.id
            }
        });
        res.json({success:true,admssion:newAdmission})
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }
}

const allDoctors = async(req,res)=>{
    const prisma = req.prisma;
    try{
        const alldoctors = await prisma.doctors.findMany({
            select:{
                id:true,
                name:true,
                designation:true,
                department:{
                    select:{
                        name:true
                    }
                },
                _count:{
                    select:{
                        opdQueue:{
                            where:{
                                status:QueueStatus.Pending
                            }
                        }
                    }
                }
            }
        })
        res.json({success:true,doctors:alldoctors})
    }catch(err){
        console.log(err);
        res.json({success:false,doctors:null})
    }
}

const getDoctor = async(req,res)=>{
    const prisma = req.prisma;
    try{
        const {doctor_id} = req.bodyl
        const doctorwithid = await prisma.doctors.findUnique({
            where:{
                id:doctor_id
            },select:{
                name:true,
                department:{
                    name:true
                },
                _count:{
                    opdQueue:{
                        where:{
                            status:QueueStatus.Pending
                        }
                    }
                }
            }
        })
        res.json({success:true,doctors:doctorwithid})
    }catch(err){
        console.log(err);
        res.json({success:false,doctors:null})
    }
}

export {doctorRegister,doctorLogin,getQueuedPatients,addMedications,allDoctors,createAdmission,getDoctor}