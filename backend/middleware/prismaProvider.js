import { PrismaClient as centralPrismaClient } from "../prisma/generated/central/index.js";
import { PrismaClient as hospitalPrismaClient } from "../prisma/generated/hospitalClient/index.js";

const centralprisma = new centralPrismaClient({
    datasources:{
        db:{
            url:process.env.CENTRAL_DB_URL,
        }
    }
})

const prismaClients = new Map();

const getHospitalPrismaClient = async(req,res,next)=>{
    const code = req.headers.code;
    console.log(code);
    try{
        if(prismaClients.has(code)){
            req.prisma = prismaClients.get(code);
            return next();
        }
        const hospitals = await centralprisma.hospital.findMany({})
        console.log(hospitals)
        const hospitalDBURL = await centralprisma.hospital.findUnique({
            where:{
                code:code
            },select:{
                dbURL:true
            }
        })
        console.log(hospitalDBURL)  
        const prisma = new hospitalPrismaClient({
            datasources:{
                db:{
                    url:hospitalDBURL.dbURL,
                }
            }
        })
        prismaClients.set(code,prisma)
        req.prisma = prisma;
        next();
    }catch(err){
        console.log(err);
        res.json({success:false,message:err})
    }  
}

export {getHospitalPrismaClient}