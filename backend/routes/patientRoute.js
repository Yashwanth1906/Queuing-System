import { Router } from "express";
import { getBookedAppointments, getPatient, intimations, patientLogin } from "../controllers/patientController.js";
import { authMiddleWare } from "../middleware/auth.js";
import { getHospitalPrismaClient } from "../middleware/prismaProvider.js";

export const patientRouter = Router();

patientRouter.post("/login",patientLogin)
patientRouter.get("/getdetails",authMiddleWare,getPatient)
patientRouter.post("/intimation",getHospitalPrismaClient,intimations)
patientRouter.get("/appointments",authMiddleWare,getBookedAppointments)