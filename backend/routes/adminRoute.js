import express from "express"
import { addHospital, createPatient, getPatientabhaId, migratealldbs,adminregister,adminlogin, getHospitals, getHosp, addOPD, addMultipleOPD } from "../controllers/adminController.js";
import { getHospitalPrismaClient } from "../middleware/prismaProvider.js";
const adminRouter = express.Router();

adminRouter.post("/addhospital",addHospital)
adminRouter.get("/migratedb",migratealldbs)
adminRouter.get("/getpatient",getPatientabhaId)
adminRouter.post("/createpatient",createPatient)
adminRouter.post("/adminregister",getHospitalPrismaClient,adminregister)
adminRouter.post("/adminlogin",getHospitalPrismaClient,adminlogin)
adminRouter.post("/gethosp",getHosp)
adminRouter.post("/addopd",getHospitalPrismaClient,addOPD)
adminRouter.post("/addmanyopd",getHospitalPrismaClient,addMultipleOPD)


export {adminRouter}
