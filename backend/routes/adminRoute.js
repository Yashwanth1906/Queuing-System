import express from "express"
import { addHospital, createPatient, getPatientabhaId, migratealldbs,adminregister,adminlogin } from "../controllers/adminController.js";
import { getHospitalPrismaClient } from "../middleware/prismaProvider.js";
const adminRouter = express.Router();

adminRouter.post("/addhospital",addHospital)
adminRouter.get("/migratedb",migratealldbs)
adminRouter.post("/getpatient",getPatientabhaId)
adminRouter.post("/createpatient",createPatient)
adminRouter.post("/adminregister",getHospitalPrismaClient,adminregister)
adminRouter.post("/adminlogin",getHospitalPrismaClient,adminlogin)


export {adminRouter}
