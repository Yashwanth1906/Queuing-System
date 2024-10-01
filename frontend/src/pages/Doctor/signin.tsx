interface HospitalCode {
  hosCode: string;
}

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BACKEND_URL, HOSPITAL_CODE } from "@/config";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function SigninDoctor() {
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

  useEffect(() => {
    if (hosCodes.length > 0) {
      console.log("Hospital codes updated:", hosCodes);
    }
  }, [hosCodes]); 

  const handleSubmit = async () => {
    if (email === "" || passwd === "" || selectedHosCode === "") {
      alert("Please fill in all fields");
      return;
    }
    try {
      const res = await axios.post(`${BACKEND_URL}/api/doctor/login`, {
        email,
        password: passwd,
        hosCode: selectedHosCode,
      },{
        headers:{
          code: HOSPITAL_CODE
        }
      }) as { data: { success: boolean; token: string; hosCode: string } };
      console.log(res.data.token)
      localStorage.setItem("doctortoken", res.data.token);
      navigate("/doctordashboard");
    } catch (err: any) {
      alert("Login error");
    }
  };

  const handleHosCodeChange = (value: string) => {
    setSelectedHosCode(value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!hosCodes.length) {
    return <p>No hospital codes available.</p>;
  }

  return (
    <div className="min-h-screen w-screen absolute top-0 left-0 bg-blue-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Sign in</CardTitle>
          <CardDescription className="text-center">
            Enter your email and password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required onChange={(e) => setPasswd(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hospital-code">Hospital Code</Label>
            {/* <Select onValueChange={handleHosCodeChange}>
              <SelectTrigger id="hospital-code">
                <SelectValue placeholder="Select hospital code" />
              </SelectTrigger>
              <SelectContent>
                {hosCodes.map((hoscode, index) => (
                  <SelectItem key={`${hoscode.hosCode}-${index}`} value={hoscode.hosCode}>
                    {hoscode.hosCode}
                  </SelectItem>
                ))}
              </SelectContent>

            </Select> */}
            <Input id="hoscode" type="hoscode" required onChange={(e) => setSelectedHosCode(e.target.value)} />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700">
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
