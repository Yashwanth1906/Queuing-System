import { useState, FormEvent } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link ,useNavigate} from "react-router-dom";
import { BACKEND_URL } from "@/config";
import { Meteors } from "@/components/ui/meteors";
import { AnimeatedButton } from "@/components/component/buttonss";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

import axios from "axios";

interface SignInFormData {
  email: string;
  password: string;
}

export function SignAdmin() {
  const [email, setEmail] = useState<string>(" ");
    const [passwd, setPasswd] = useState<string>(" ");
    const navigate = useNavigate();
    
  // const [formData, setFormData] = useState<SignInFormData>({
  //   email: "",
  //   password: "",
  // });
  // const [error, setError] = useState<string | null>(null);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { id, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [id]: value,
  //   }));
  // };

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setError(null);

  //   if (!formData.email || !formData.password) {
  //     setError("Please fill in all fields.");
  //     return;
  //   }

  //   try {
  //     const res = await axios.post(`${BACKEND_URL}/api/admin/login`, formData) as { success: boolean, token: string };
  //     localStorage.setItem("admintoken", res.token);
  //     console.log("Login successful");
  //   } catch (err: any) {
  //     // Handle error
  //     setError(err.message);
  //   }
  // };

  // return (
  //   <div className="mx-auto  space-y-6">
  //     <div className="space-y-2 text-center">
  //       <h1 className="text-3xl font-bold">Login</h1>
  //       <p className="text-muted-foreground">Enter your email and password to access your account.</p>
  //     </div>
  //     <Card>
  //       <form onSubmit={handleSubmit}>
  //         <CardContent className="space-y-4">
  //           <div className="space-y-2">
  //             <Label htmlFor="email">Email</Label>
  //             <Input
  //               id="email"
  //               type="email"
  //               placeholder="m@example.com"
  //               value={formData.email}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>
  //           <div className="space-y-2">
  //             <Label htmlFor="password">Password</Label>
  //             <Input
  //               id="password"
  //               type="password"
  //               value={formData.password}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>
  //         </CardContent>
  //         <CardFooter className="flex items-center justify-between">
  //           <Button type="submit" className="w-full">
  //             Sign in
  //           </Button>
  //         </CardFooter>
  //       </form>
  //     </Card>
  //     <div className="text-center text-sm text-muted-foreground">
  //       Don't have an account? <Link to="/adminsignup">Sign Up</Link>
  //     </div>
  //   </div>
  // );
  return (
       
        
    <div className=" rounded-md bg-neutral-900 flex flex-col items-center justify-center w-screen absolute left-0 top-0 h-screen"> 
          <ShootingStars/>
                <StarsBackground/>
        
        <div className=" w-1/3 relative">
        
    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] bg-red-500 rounded-full blur-2xl" />
    <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
      
      <h1 className="font-bold text-xl text-white mb-4 relative z-50 w-full text-center">
        
      </h1><br></br>
                
                
      <h2 className="font-bold text-xl text-white  w-full text-center"> LOGIN</h2>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <div className="grid w-full max-w-sm items-center gap-1.5">
                     <label htmlFor="email" className=" flex justify-start text-white">Email</label>
                     <Input type="text" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                 </div>
                
                 <div className="grid w-full max-w-sm items-center gap-1.5 py-5  ">
                     <label htmlFor="email" className=" flex justify-start text-white">Password</label>
                     <Input type="text" id="email" placeholder="Password" onChange={(e) => setPasswd(e.target.value)} />
                 </div>
<br></br>
        <AnimeatedButton className="" val={"Signin"} onClicked={async () => {
                     try {
                         const res = await axios.post(`${BACKEND_URL}/api/user/login`, {
                             email,
                             password: passwd

                         })
                         console.log(res.data.token);
                         if (!res.data.success) {
                             alert("user not found")
                         }
                         else {
                             localStorage.setItem("usertoken", res.data.token);
                             console.log(localStorage.getItem("token"))
                      
                             navigate("/dashboard");
                         }
                         //@ts-ignore
                        
                     }
                     catch {
                        window.alert("error");
                    }

            }}>Sign In</AnimeatedButton>
           
               
           

      
          </div>
          </div>
      
                <Meteors number={40} />
               
    </div>
        </div>
</div>
    

)
}
