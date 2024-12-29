import { Router } from "express";
import { bookBySymptoms, bookSlot, getBookedAppointments, getPatient, getSlots, patientLogin } from "../controllers/patientController.js";

import { authMiddleWare } from "../middleware/auth.js";
import { getHospitalPrismaClient } from "../middleware/prismaProvider.js";
import { getHospitals } from "../controllers/adminController.js";

export const patientRouter = Router();

patientRouter.post("/login",patientLogin)
patientRouter.get("/getdetails",authMiddleWare,getPatient)
patientRouter.get("/appointments",authMiddleWare,getBookedAppointments)
patientRouter.get("/gethospitals",authMiddleWare,getHospitals);
patientRouter.post("/getslots",getHospitalPrismaClient,authMiddleWare,getSlots);
patientRouter.post("/bookslot",getHospitalPrismaClient,authMiddleWare,bookSlot);
patientRouter.post("/bookwithsymptoms",getHospitalPrismaClient,authMiddleWare,bookBySymptoms);