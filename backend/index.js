import express from "express"
import dotenv from "dotenv"
import { adminRouter } from "./routes/adminRoute.js";
import { PrismaClient } from "./prisma/generated/central/index.js";
import { hospitalRouter } from "./routes/hospitalRoute.js";
import { doctorRouter } from "./routes/doctorRoute.js";
import { sendOTP, verifyotp } from "./middleware/auth.js";
import cors from "cors"
import { patientRouter } from "./routes/patientRoute.js";

const centralprisma = new PrismaClient();

dotenv.config();



const app = express();
app.use(cors())
app.use(express.json())
app.listen(process.env.BACKEND_PORT,()=>{
    console.log("Running")
})
app.delete("/delete",async(req,res)=>{
    await centralprisma.patient.deleteMany({})
    res.json({success:true})
})
app.use("/api/admin",adminRouter)
app.use("/api/hospital",hospitalRouter)
app.use("/api/doctor",doctorRouter)
app.use("/api/patient",patientRouter)
app.post("/api/sendotp",sendOTP)
app.post("/api/verifyotp",verifyotp)

app.get("/check",(req,res)=>{
    res.send("Running");
})