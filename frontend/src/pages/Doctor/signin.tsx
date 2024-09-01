import { useState, FormEvent } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BACKEND_URL, HOSPITAL_CODE } from "@/config";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
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
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Doctor Login</h1>
          <p className="mt-2 text-muted-foreground">Enter your email and password to access your account.</p>
        </div>
        <div className="space-y-4" >
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@hospital.com"
          
              onChange={(e)=>{setEmail(e.target.value)}}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e)=>setPasswd(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Hospital Code</Label>
            <Input
              
              type="text"
              onChange={(e)=>setHosCode(e.target.value)}
              required
            />
          </div>
         
         
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Login
          </Button>
      
        </div>
      </div>
    </div>
  );
}
