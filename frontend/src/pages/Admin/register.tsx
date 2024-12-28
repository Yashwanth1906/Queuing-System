import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { BACKEND_URL } from "@/config";

interface SignUpFormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function Register() {
  const [formState, setFormState] = useState<SignUpFormState>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [otp, setOtp] = useState<string>("");
  const [isOTPSent, setIsOTPSent] = useState<boolean>(false);
  const [isOTPVerified, setIsOTPVerified] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSendOTP = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/sendotp`, {
        email: formState.email
      }).then((data) => {
        alert(data.data.message);
      });
      setIsOTPSent(true);
    } catch (err) {
      setError("Failed to send OTP. Please try again.");
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/verifyotp`, {
        email: formState.email,
        otp: otp
      });
      alert(response.data.message);
      if (response.data.message === "OTP verified") {
        setIsOTPVerified(true);
      } else {
        setIsOTPVerified(false);
      }
    } catch (err) {
      setError("OTP verification failed. Please try again.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.password !== formState.confirmPassword) {
      setError("Passwords don't match");
      return;
    }
    if (!isOTPVerified) {
      setError("Please verify OTP before submitting.");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/api/admin/adminregister`, {
        name: formState.name,
        email: formState.email,
        password: formState.password,
      });
      localStorage.setItem("admintoken", response.data.token);
      navigate("/admindashboard");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormState((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#CFFFDC] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#2E6F40]">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-[#253D2C]">
            Or{" "}
            <Link to="/adminsignin" className="font-medium text-[#68BA7F] hover:text-[#2E6F40]">
              sign in to your existing account
            </Link>
          </p>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-[#253D2C]">
              Name
            </Label>
            <div className="mt-1">
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Name"
                value={formState.name}
                onChange={handleChange}
                className="block w-full appearance-none rounded-md border border-[#68BA7F] bg-white px-3 py-2 placeholder-[#253D2C] shadow-sm focus:border-[#2E6F40] focus:outline-none focus:ring-1 focus:ring-[#2E6F40] sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-[#253D2C]">
              Email address
            </Label>
            <div className="mt-1">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email"
                value={formState.email}
                onChange={handleChange}
                className="block w-full appearance-none rounded-md border border-[#68BA7F] bg-white px-3 py-2 placeholder-[#253D2C] shadow-sm focus:border-[#2E6F40] focus:outline-none focus:ring-1 focus:ring-[#2E6F40] sm:text-sm"
              />
              <div className="flex gap-2 mt-2">
                <Button 
                  type="button" 
                  className="w-full bg-[#2E6F40] text-white hover:bg-[#253D2C]" 
                  onClick={handleSendOTP} 
                  disabled={isOTPSent}
                >
                  {isOTPSent ? 'OTP Sent' : 'Send OTP'}
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="otp" className="block text-sm font-medium text-[#253D2C]">OTP</Label>
            <Input 
              id="otp" 
              placeholder="Enter OTP" 
              required 
              value={otp} 
              onChange={handleOtpChange}
              className="block w-full appearance-none rounded-md border border-[#68BA7F] bg-white px-3 py-2 placeholder-[#253D2C] shadow-sm focus:border-[#2E6F40] focus:outline-none focus:ring-1 focus:ring-[#2E6F40] sm:text-sm"
            />
            <Button 
              type="button" 
              className="w-full bg-[#68BA7F] text-white hover:bg-[#2E6F40]" 
              onClick={handleVerifyOTP} 
              disabled={isOTPVerified}
            >
              {isOTPVerified ? 'OTP Verified' : 'Verify OTP'}
            </Button>
          </div>
          <div>
            <Label htmlFor="password" className="block text-sm font-medium text-[#253D2C]">
              Password
            </Label>
            <div className="mt-1">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password"
                value={formState.password}
                onChange={handleChange}
                className="block w-full appearance-none rounded-md border border-[#68BA7F] bg-white px-3 py-2 placeholder-[#253D2C] shadow-sm focus:border-[#2E6F40] focus:outline-none focus:ring-1 focus:ring-[#2E6F40] sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="confirm-password" className="block text-sm font-medium text-[#253D2C]">
              Confirm Password
            </Label>
            <div className="mt-1">
              <Input
                id="confirmPassword"
                name="confirm-password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Confirm Password"
                value={formState.confirmPassword}
                onChange={handleChange}
                className="block w-full appearance-none rounded-md border border-[#68BA7F] bg-white px-3 py-2 placeholder-[#253D2C] shadow-sm focus:border-[#2E6F40] focus:outline-none focus:ring-1 focus:ring-[#2E6F40] sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#2E6F40] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#253D2C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#68BA7F] focus-visible:ring-offset-2"
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

