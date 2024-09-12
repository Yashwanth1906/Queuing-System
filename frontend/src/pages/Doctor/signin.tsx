import { useState, FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BACKEND_URL, HOSPITAL_CODE } from "@/config";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from "@/components/ui/stars-background";
import { AlertTriangle } from "lucide-react";

// Define the shape of the form data
interface SignInFormData {
  email: string;
  password: string;
}

export function SigninDoctor() {


  const [email,setEmail]=useState<string>();
  const [passwd,setPasswd]=useState<string>();
  const [hosCode,setHosCode]=useState<string>();
  const navigate=useNavigate();




 
 
  const handleSubmit = async () => {
   
    try {
        const res=await axios.post(`${BACKEND_URL}/api/doctor/login`, {
          email,
          passwd,
          hosCode
        },{
          headers:{
            code:hosCode
          }
        })
        if(!res.data.success)
        {
          alert("error")
        }
        else{
          localStorage.setItem("doctortoken",res.data.token)
          localStorage.setItem("hospitalcode",res.data.hosCode) 
          navigate("/doctordashboard") 

        

        }
        
             



    } catch (err) {
        console.log(err);

    }
};
  return (
    <div className="flex h-screen flex-col items-center bg-neutral-950 justify-center w-screen absolute top-0 left-0 right-0 px-4 py-12 sm:px-6 lg:px-8">
      <ShootingStars />
      <StarsBackground/>
      <div className="mx-auto w-full max-w-md relative space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 font-bold">Doctor Login</h1>
          <p className="mt-2 text-muted-foreground">Enter your email and password to access your account.</p>
        </div>
        <div className="space-y-4" >
          <div>
            <Label htmlFor="email" className="text-white">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@hospital.com"
          
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-white">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e)=>setPasswd(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-white">Hospital Code</Label>
            <Input
              placeholder="Hospital Code"
              type="text"
              onChange={(e)=>setHosCode(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Login
          </Button>
        </div>
        <div>
          <div className="text-white px-2">New Doctor?<Link to="/doctorssignup" className="text-blue">     Register</Link></div>
        </div>
      </div>
    </div>
  );
}
