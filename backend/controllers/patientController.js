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

function formatDateToDDMMYYYY(date) {
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

function getNextDateFormatted(date) {
    const nextDate = new Date(date);
    
    nextDate.setDate(nextDate.getDate() + 1);
    
    const day = String(nextDate.getDate()).padStart(2, '0');
    const month = String(nextDate.getMonth() + 1).padStart(2, '0'); 
    const year = nextDate.getFullYear();

    return `${day}-${month}-${year}`;
}



export const getSlots=async (req,res)=>{
	try{
		const prisma=req.prisma;
		console.log(prisma)
		const {deptId}=req.body;
		const date=formatDateToDDMMYYYY(new Date());
		const nextDate=getNextDateFormatted((new Date()));
		console.log(deptId)
		console.log(date)
		console.log(nextDate);
		
		let check;
		try{
			check=await prisma.Intimation.findMany({
				where:{
					deptId,
					date,
					abhaId:req.headers.id

				}
			})
		}
		catch{
			return res.status(500).json({msg:"error"});

		}




		let slot1;
		let slot2;

		try{
			slot1=await prisma.OPSlots.findMany({
				where:{
					deptid:deptId,
					date,
					count:{gt:0}
				}
			})
			console.log(slot1);
		}
		catch(e){
			console.log(e)
		}

		try{
			slot2=await prisma.OPSlots.findMany({
				where:{
					deptid:deptId,
					date:nextDate,
					count:{gt:0}
				}
			})
			console.log(slot2);
		}
		catch{};
		
		return res.status(200).json({date:slot1[0],nextDate:slot2[0]});

	}
	catch{
		return res.status(500).json({msg:"error"});
	}

}

function formatTimeToHHMM(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0'); 

    return `${hours}:${minutes}`;
}



export const bookSlot=async(req,res)=>{
	try{
		const prisma=req.prisma;
		console.log(req.body)
		const {slotid,abhaId,deptId}=req.body;
		console.log(slotid)
		const date=formatDateToDDMMYYYY(new Date());
		const time=formatTimeToHHMM(new Date());

		await prisma.$transaction(async (tx)=>{

			const result=await tx.OPSlots.update({
			data:{
				count:{decrement:1}
			},
			where:{
				id:slotid
			}
		})

			const temp=await tx.Intimation.create({
				data:{
					abhaId:req.headers.id,
					date,
					time,
					deptId

				}
			})


		})
		return res.status(200).json({msg:"done"})


	}
	catch(e){
		console.log(e)
		return res.status(500).json({msg:"error"});
	}
}

export const getPatient = async(req,res) =>{
    try{
        const abha = req.headers.id;
        const patient = await centralPrisma.patient.findUnique({
            where:{
                abhaId:abha
            },include:{
                medicalRecords:true,
                patientBooking:true
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
