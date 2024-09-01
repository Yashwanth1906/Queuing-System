import { useState, FormEvent } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "@/config";
import axios from "axios";



export function SignAdmin() {
  const [email,setEmail]=useState<String>();
  const [passwd,setPasswd]=useState<String>();
  const [hosCode,setHosCode]=useState<String>();
  const navigate=useNavigate();





  const handleSubmit = async () => {
  

    if (email==="" || passwd==="") {
      alert("error")
      return;
    }

    try {
      const res = await axios.post(`${BACKEND_URL}/api/admin/adminlogin`, {
        email,
        password:passwd,
        hosCode


      }) as { data:{success: boolean, token: string,hosCode:string} };
      localStorage.setItem("admintoken", res.data.token);
      localStorage.setItem("hospitalcode",res.data.hosCode);

      console.log("Login successful");
      navigate('/admindashboard')
      

    } catch (err: any) {
      alert("error")
     
    }
  };

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-muted-foreground">Enter your email and password to access your account.</p>
      </div>
      <Card>
        <div>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
           
                type="email"
                placeholder="m@example.com"
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
             
                type="password"
                onChange={(e)=>setPasswd(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hoscode">Hospital Code</Label>
              <Input
                type="text"
                onChange={(e)=>setHosCode(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Sign in
            </Button>
          </CardFooter>
        </div>
      </Card>
      <div className="text-center text-sm text-muted-foreground">
        Don't have an account? <Link to="/adminsignup">Sign Up</Link>
      </div>
    </div>
  );
}
