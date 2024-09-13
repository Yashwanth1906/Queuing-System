import { Router } from "express";
import { patientLogin } from "../controllers/patientController.js";

export const patientRouter = Router();

patientRouter.post("/login",patientLogin)
