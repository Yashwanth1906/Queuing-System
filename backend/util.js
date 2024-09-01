import { PrismaClient as centralPrismaClient } from "./prisma/generated/central/index.js";



export const centralprisma = new centralPrismaClient({
    datasources:{
        db:{
            url:process.env.CENTRAL_DB_URL,
        }
    }});




    