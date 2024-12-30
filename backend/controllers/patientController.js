import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { PrismaClient as centralPrismaClient } from "../prisma/generated/central/index.js";
import QueueManager from "../queue.js";
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
export async function getpatientqueue(req, res) {
    try {
        const prisma = req.prisma;
        const abhaId = req.headers.id;
        const queue=QueueManager.getInstance().queue;
        console.log(abhaId)
        console.log(queue)
        
            let flag=false;
            let docId=-1;
            for(let i in queue)
            {
                console.log(i)
                for(let j=0;j<queue[i].length;j++)
                {
                    console.log(queue[i][j])
                    console.log(queue[i][j]);
                    if(queue[i][j].patientInstanceId==abhaId)
                    {
                        docId=i;
                        flag=true;
                    
                        break;
                    }
                    
                }
                if(flag)
                {
                    break
                }

            }
            if(!flag)
            {
                return res.status(500).json({msg:"not in queue"})
            }

            let arr=[]
            for (let i=0;i<queue[docId].length;i++)
            {
                let temp=await prisma.PatientInstance.findUnique({
                    where:{
                        abhaId:queue[docId][i].patientInstanceId
                    },
                    include:{
                        doctor:true
                    }
                })
                arr.push(temp)

            }
   
            console.log(queue[docId]);
            console.log(arr);
        return res.status(200).json({queuedata:queue[docId],queued:arr,abhaId});
    } catch (err) {
        console.log(err);


        res.json({ message: err.message });
    }
}

export function formatDateToDDMMYYYY(date) {
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

export function getNextDateFormatted(date) {
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
		// console.log(prisma)
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

		}


		if(check.length!=0)
		{
            console.log(check)
			return res.status(500).json({msg:"already booked"});
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
	catch(err){
        console.log(err)
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
		const {slotid,deptId}=req.body;
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
                deptId,
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


export const bookBySymptoms=async(req,res)=>{
    try{
        const {symptoms}=req.body;
        const prisma=req.prisma
        const date=formatDateToDDMMYYYY(new Date())
        const time=formatTimeToHHMM(new Date())


        const temp=await prisma.Intimation.create({
            data:{
                abhaId:req.headers.id,
                reason:symptoms,
                date,
                time

            }
        })

        return res.status(200).json({msg:"done"});



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


export const intimatebyreason = async(req,res) =>{
    try{
        const prisma = req.prisma;
        const {slotid,reason} = req.body;
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
                reason,
            }
        })


		})
		return res.status(200).json({msg:"done"})
    } catch(e){
        console.log(e);
        res.json({success:false,message:e})
    }
}




function createtoken(id)
{
    const token=jwt.sign({id},process.env.JWT_SECRET);
    return token
}
