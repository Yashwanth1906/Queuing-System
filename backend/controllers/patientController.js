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
        return res.status(200).json({token})
    }
    catch(er){
        console.log(er);
        res.status(500).json({message:er})
    }
}

function createtoken(id)
{
    const token=jwt.sign({id},"hospitaladmin");
    return token
}