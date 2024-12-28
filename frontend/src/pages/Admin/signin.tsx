interface HospitalCode {
  hosCode: string;
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AdminSigninPage() {
  const [email, setEmail] = useState<string>("");
  const [passwd, setPasswd] = useState<string>("");
  const [hosCodes, setHosCodes] = useState<HospitalCode[]>([]); 
  const [selectedHosCode, setSelectedHosCode] = useState<string>(""); 
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHospitalCodes = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_URL}/api/hospital/gethoscodes`);
        if (data && data.hosCodes) {
          setHosCodes(data.hosCodes); 
        } else {
          console.error("Invalid response structure:", data);
        }
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching hospital codes", error);
        setLoading(false); 
      }
    };
    fetchHospitalCodes();
  }, []);

  const handleSubmit = async () => {
    if (email === "" || passwd === "" || selectedHosCode === "") {
      alert("Please fill in all fields");
      return;
    }
    try {
      const res = await axios.post(`${BACKEND_URL}/api/admin/adminlogin`, {
        email,
        password: passwd,
        hosCode: selectedHosCode,
      }, {
        headers: {
          code: selectedHosCode
        }
      }) as { data: { success: boolean; token: string; hosCode: string } };

      localStorage.setItem("admintoken", res.data.token);
      localStorage.setItem("hospitalcode", res.data.hosCode);
      navigate("/admindashboard");
    } catch (err: any) {
      alert("Login error");
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!hosCodes.length) {
    return <p>No hospital codes available.</p>;
  }

  return (
    <div className="min-h-screen w-screen bg-[#CFFFDC] flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-[#2E6F40] text-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
          <CardDescription className="text-center text-[#CFFFDC]">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#CFFFDC]">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-[#CFFFDC] text-black"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#CFFFDC]">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPasswd(e.target.value)}
              required
              className="bg-[#CFFFDC] text-black"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hospital-code" className="text-[#CFFFDC]">Hospital Code</Label>
            <Input
              id="hoscode"
              type="text"
              placeholder="Enter the Hospital Code"
              onChange={(e) => setSelectedHosCode(e.target.value)}
              required
              className="bg-[#CFFFDC] text-black"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleSubmit}
            className="w-full bg-[#2E6F40] hover:bg-[#68BA7F] text-white"
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
