import { stringify } from "querystring";
import { PrismaClient } from "../prisma/generated/central/index.js";
import { centralprisma } from "../util.js";
import { exec } from 'child_process';
import bcrypt from "bcryptjs"
import validator from "validator";
// const centralprisma = new PrismaClient({
//     datasources:{
//         db:{
//             url:process.env.CENTRAL_DB_URL,
//         }
//     }});
const addHospital = async(req,res)=>{
    console.log(req.body)
    const {name,location,city,state,dbURL,code} = req.body;
    try{
    const hospital = await centralprisma.hospital.create({
        data:{
            code,
            name,
            location,
            city,state,
            dbURL:dbURL,
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
            exec("npx prisma migrate dev --schema=/home/yashwanth-linux/Hospital-SIH/backend/prisma/hospitalschema.prisma",(error,stdout,stderr)=>{
                if(error){
                    console.log("Error in migrating");
                    reject(error);
                }
                console.log("Migration output: "+stdout);
                resolve();
            })
            exec("npx prisma generate --schema=/home/yashwanth-linux/Hospital-SIH/backend/prisma/hospitalschema.prisma",(error,stdout,stderr)=>{
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
    const abhaId = req.headers.abhaid;
    console.log(abhaId)
    try{
        const patient = await centralprisma.patient.findUnique({
            where:{
                abhaId:abhaId
            },select:{
                abhaId:true,
                name:true,
                DOB:true,gender:true,contact:true,
            }
        })
        console.log(patient)
        const today = new Date();
        const birthDate = new Date(patient.DOB);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        patient.Age = age;
        console.log(age);
        res.json({success:true,patient:patient})
    }catch(err){
        console.log(err);
        res.json({success:true,message:err})
    }
}

const getMedicalRecords = async(req,res)=>{
    try{
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
        res.json({sucess:true,records:medicalRecord})
    }catch(err){
        console.log(err)
        res.json({success:false,message:err})
    }
}

const createPatient = async(req,res)=>{
    const {name,contact,address,gender,dob,emergencyContact} = req.body;
    let abhaid = await centralprisma.aBHANumber.findFirst();
    if(abhaid==null){
        abhaid = "999999999999"
    }else{
        console.log(abhaid);
        abhaid = parseInt(abhaid.prev,10) -1;
        console.log(abhaid);
        abhaid = abhaid.toString();
        console.log(abhaid)
    }
    await centralprisma.aBHANumber.deleteMany()
    await centralprisma.aBHANumber.create({
        data:{
            prev:abhaid
        }
    })
    try{
        const patient = await centralprisma.patient.create({
            data:{
                abhaId:abhaid,
                name:name,
                contact:contact,
                address:address,
                gender:gender,
                DOB:dob,
                emergencyContact:emergencyContact
            }
        })
        console.log(patient);
        res.json({success:true,abhaid:abhaid});
    }catch(err){
        console.log(err);
        res.json({success:false,message:err});
    }
}

const adminregister=async(req,res)=>{
    const {name,email,pass}=req.body
    try{
        if (password.length<8){
            res.json({success:false,message:"password small"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashpass=await bcrypt.hash(password,salt)


        const admin=await prisma.admin.create(
            {
                data:{
                    name,
                    email,
                    password:hashpass,
                    hospitalCode:hosCode
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
                email,
                hospitalCode:hosCode
    
            }
        })   
        if(!admin)
        {
            return res.json({success:false})
        }

        const passVerify=await bcrypt.compare(password,admin.password)
        if(!passVerify){
            res.json({success:false,message:"pass dont match"})
        }
        const token = createtoken(admin.id)
        res.json({success:true,token,hosCode:admin.hospitalCode})
        }
    catch(err){
        res.json({success:false,message:err})
    }
}


function createtoken(id)
{
    const token=jwt.sign({id},"hospitaladmin");
    return token
}

export {addHospital,migratealldbs,createPatient,getPatientabhaId,adminregister,adminlogin}
