import express from "express"
import { addHospital, createPatient, getPatientabhaId, migratealldbs } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.post("/addhospital",addHospital)
adminRouter.get("/migratedb",migratealldbs)
adminRouter.post("/getpatient",getPatientabhaId)
adminRouter.post("/createpatient",createPatient)

export {adminRouter}
