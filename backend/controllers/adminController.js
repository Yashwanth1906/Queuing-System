import { PrismaClient } from "../prisma/generated/central/index.js";
import { exec } from 'child_process';
import bcrypt from "bcryptjs"
import validator from "validator";
const centralprisma = new PrismaClient({
    datasources:{
        db:{
            url:process.env.CENTRAL_DB_URL,
        }
    }});
const addHospital = async(req,res)=>{
    console.log(req.body)
    const {name,location,city,state,dburl,code} = req.body;
    try{
    const hospital = await centralprisma.hospital.create({
        data:{
            code,
            name,
            location,
            city,state,
            dbURL:dburl
        }
    })
    res.json({sucess:true,message:"Created",data:hospital})
    }
    catch(err){
        console.log(err)
        res.json({sucess:false,message:err})
    }
}

const migratealldbs = async(req,res) =>{
    try{
    const hospitalDBURLS = await centralprisma.hospital.findMany({
        select:{
            dbURL:true
        }
    })
    const migrateHospitals = hospitalDBURLS.map((x)=>{
        process.env.DYNAMIC_DB_URL = x.dbURL;
        return new Promise((resolve,reject) =>{
            exec("npx prisma migrate dev --schema=/home/yashwanth-linux/Demo/prisma/hospitalschema.prisma",(error,stdout,stderr)=>{
                if(error){
                    console.log("Error in migrating");
                    reject(error);
                }
                console.log("Migration output: "+stdout);
                resolve();
            })
            exec("npx prisma generate --schema=/home/yashwanth-linux/Demo/prisma/hospitalschema.prisma",(error,stdout,stderr)=>{
                if(error){
                    console.log("Error in migrating");
                    reject(error);
                }
                console.log("Migration output: "+stdout);
                resolve();
            })
        })
    })
    console.log(migrateHospitals);
    res.json({sucess:true,message:"Proceed"})
    }catch(err){
        res.json({sucess:false,message:err})
    }
}

const getPatientabhaId = async(req,res)=>{
    const {abhaId} = req.body;
    try{
        const patient = await centralprisma.patient.findUnique({
            where:{
                abhaId:abhaId
            },select:{
                abhaId:true,
                name:true,
                contact:true,
                address:true
            }
        })
        const medicalRecord = await centralprisma.medicalRecord.findMany({
            where:{
                patientId:abhaId
            },select:{
                hospitalName:true,
                recordDate:true,
                visitReason:true,
                medicationsPrescribed:true,
                treatmentSummary:true,
                doctorName:true,
                documents:true
            }
        })
        res.json({success:true,patient:patient,medicalRecord:medicalRecord})
    }catch(err){
        console.log(err);
        res.json({success:true,message:err})
    }
}

const createPatient = async(req,res)=>{
    const {abhaId,name,contact,address} = req.body;
    try{
        const patient = await centralprisma.patient.create({
            data:{
                abhaId,
                name,
                contact,
                address
            }
        })
        console.log(patient);
        res.json({success:true,patient:patient});
    }catch(err){
        console.log(err);
        res.json({success:false,message:err});
    }
}

const adminregister=async(req,res)=>{
    const {name,email,pass}=req.body
    try{
        if (pass.length<8){
            res.json({success:false,message:"pass small"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashpass=await bcrypt.hash(pass,salt)


        const admin=await prisma.admin.create(
            {
                data:{
                    name,
                    email,
                    password:hashpass
                }
            }
        )
        console.log(admin)
        res.json({success:true,message:admin})
    }
    catch (err){
        console.log(err)
        res.json({success:false,message:err})
    }
}

const adminlogin=async(req,res)=>{
        const prisma=req.prisma
        try{
        const {email,password}=req.body
        const admin=await prisma.admin.findUnique({
            where:{
                email:email
            },
            select:{
                id:true,
                password:true
            }
        })   

        const passVerify=await bcrypt.compare(password,admin.password)
        if(!passVerify){
            res.json({success:true,message:"pass dont match"})
        }
        const token = createtoken(admin.id)
        res.json({success:true,message:{token}})
    }
    catch(err){
        res.json({success:false,message:err})
    }
}

export {addHospital,migratealldbs,createPatient,getPatientabhaId,adminregister,adminlogin}