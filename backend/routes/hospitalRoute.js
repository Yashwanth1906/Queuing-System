import express from "express"
import { getHospitalPrismaClient } from "../middleware/prismaProvider.js";
import { addDepartments, addWard, allocateBed, createPatientInstance, getAdmissionsBedNotAllocated, getDepartments, getDoctors, getPatient,getwards } from "../controllers/hospitalController.js";
// import { createPatient } from "../controllers/adminController.js";


const hospitalRouter = express.Router();

hospitalRouter.get("/getdoctors",getHospitalPrismaClient,getDoctors);
hospitalRouter.post("/adddepartment",getHospitalPrismaClient,addDepartments)
hospitalRouter.get("/getdepartments",getHospitalPrismaClient,getDepartments)
hospitalRouter.post("/createpatient",getHospitalPrismaClient,createPatientInstance)
hospitalRouter.post("/addward",getHospitalPrismaClient,addWard)
hospitalRouter.get("/getunallocated",getHospitalPrismaClient,getAdmissionsBedNotAllocated)
hospitalRouter.get("/allocate",getHospitalPrismaClient,allocateBed)
hospitalRouter.get("/getpatientdetails",getHospitalPrismaClient,getPatient)
hospitalRouter.get("/getwards",getHospitalPrismaClient,getwards)
export {hospitalRouter}