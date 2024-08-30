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
  const [formData, setFormData] = useState<SignInFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log(formData); 
    try {
        await axios.post(`${BACKEND_URL}/api/doctor/login`, formData, {
            headers: {
                code: HOSPITAL_CODE
            }
        }).then((response) => {
            if (response.data && response.data.success) {
                const token = response.data.token;
                console.log(token);
                localStorage.setItem("doctortoken", token);
                alert("Login Successful");
                navigate("/doctordashboard");
            } else {
                alert(response.data.message || "Login failed");
            }
        }).catch((err) => {
            alert(err.message || "An error occurred");
        });
    } catch (err) {
        console.log(err);
        setError("An error occurred. Please try again.");
    }
};
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Doctor Login</h1>
          <p className="mt-2 text-muted-foreground">Enter your email and password to access your account.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@hospital.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <br />
          <Button type="submit" className="w-full">
            Login
          </Button>
          <p>Have you registered? <Link to="/doctorssignup">SignUp</Link></p>
        </form>
      </div>
    </div>
  );
}
