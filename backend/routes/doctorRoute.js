import express from "express"
import { addMedications, createAdmission, doctorLogin, doctorRegister, getQueuedPatients } from "../controllers/doctorController.js";
import { getHospitalPrismaClient } from "../middleware/prismaProvider.js";
import { authMiddleWare } from "../middleware/auth.js";

const doctorRouter = express.Router();

doctorRouter.post("/register",getHospitalPrismaClient,doctorRegister)
doctorRouter.post("/login",getHospitalPrismaClient,doctorLogin)
doctorRouter.get("/getPatients",getHospitalPrismaClient,authMiddleWare,getQueuedPatients)
doctorRouter.post("/addmedications",getHospitalPrismaClient,authMiddleWare,addMedications)
doctorRouter.post("/createadmission",getHospitalPrismaClient,authMiddleWare,createAdmission)

export {doctorRouter}