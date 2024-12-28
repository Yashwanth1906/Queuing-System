import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { PrismaClient as centralPrismaClient } from "../prisma/generated/central/index.js";
const centralPrisma = new centralPrismaClient({
    datasources:{
        db:{
            url:process.env.CENTRAL_DB_URL
        }
    }
})


export const patientLogin = async(req,res) =>{
    const {abhaId,password,email} = req.body;
    try{
        const patient=await centralPrisma.patient.findUnique({
            where:{
                email:email,
                abhaId:abhaId
            }
        })   
        if(!patient)
        {
            return res.status(500).json({success:false})
        }
        const passVerify=await bcrypt.compare(password,patient.password)
        if(!passVerify){
            return res.status(500).json({success:false,message:"pass dont match"})
        }
        const token = createtoken(patient.abhaId);
        return res.status(200).json({token:"Bearer "+token})
    }
    catch(er){
        console.log(er);
        res.status(500).json({message:er})
    }
}

export const getPatient = async(req,res) =>{
    try{
        const abha = req.headers.id;
        const patient = await centralPrisma.patient.findUnique({
            where:{
                abhaId:abha
            },select:{
                name:true,
                abhaId:true,
                DOB:true,gender:true
            }
        })
        const today= new Date();
        const birthDate = new Date(patient.DOB);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        patient.Age = age;
        return res.status(200).json({patient:patient})
    }catch(err){
        console.log(err)
        res.status(500).json({message:err})
    }
}

export const intimations = async(req,res) =>{
    console.log(req.prisma)
    const prisma = req.prisma;
    try{
        const {code,reason,name,gender,age,date,time,abhaId} = req.body;
        const hospitalUpdate = await prisma.intimation.create({
            data:{
                abhaId:abhaId,
                name:name,
                gender:gender,
                age,
                reason,
                date,time
            }
        })
        const patientBook = await centralPrisma.patientBooking.create({
                data:{
                    abhaId : abhaId,
                    hospitalCode:code,
                    date:date,
                    time:time,reason
                }
        })
        console.log(patientBook,hospitalUpdate)
        return res.status(200).json({message:"Successful"})
    }catch(err){
        console.log(err);
        res.status(200).json({message:err})
    }
}
export const getBookedAppointments = async(req,res)=>{
    console.log(req.headers.id);
    try{
        const patientAppointments = await centralPrisma.patientBooking.findMany({
            where:{
                abhaId:req.headers.id
            },select:{
                id:true,
                date:true,
                time:true,
                reason:true,
                hospital:{
                    select:{
                        name:true,
                        code:true
                    }
                }
            }
        })
        console.log(patientAppointments)
        return res.json({appointments:patientAppointments})
    }
    catch(err){
        console.log(err);
        return res.json({message:err})
    }
}

function createtoken(id)
{
    const token=jwt.sign({id},process.env.JWT_SECRET);
    return token
}
