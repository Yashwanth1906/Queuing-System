interface HospitalCode {
  hosCode: string;
}
import { Select,SelectTrigger,SelectContent,SelectItem,SelectValue} from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
//@ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      console.log("err" , err)

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
    <div className="min-h-screen bg-[#CFFFDC] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-[#2E6F40] text-center mb-6">
          Doctor Sign In
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
  <Label htmlFor="hospital-code">Hospital Code</Label>
  <Select onValueChange={(value) => setSelectedHosCode(value)}>
    
    <SelectContent>
      {hosCodes.map((hoscode, index) => (
        <SelectItem key={`${hoscode.hosCode}-${index}`} value={hoscode.hosCode}>
          {hoscode.hosCode}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
  <Input
    id="hoscode"
    type="text"
    placeholder="Or enter custom code"
    onChange={(e) => setSelectedHosCode(e.target.value)}
  />
</div>
          <div>
            <label className="block text-[#253D2C] font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-[#68BA7F] focus:outline-none focus:ring-2 focus:ring-[#2E6F40]"
              required
            />
          </div>
          
          <div>
            <label className="block text-[#253D2C] font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={passwd}
              onChange={(e) => setPasswd(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-[#68BA7F] focus:outline-none focus:ring-2 focus:ring-[#2E6F40]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2E6F40] text-white py-3 rounded-lg hover:bg-[#68BA7F] transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}