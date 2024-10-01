import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { BACKEND_URL } from "@/config";


// Define the shape of the sign-up form state
interface SignUpFormState {
  name: string; // Added 'name' field
  email: string;
  password: string;
  confirmPassword: string;
}

export function Register() {
  // State to manage form input values
  const [formState, setFormState] = useState<SignUpFormState>({
    name: "", // Initialize 'name'
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [otp, setOtp] = useState<string>("");
  
  const [isOTPSent, setIsOTPSent] = useState<boolean>(false); // To track if OTP has been sent
  const [isOTPVerified, setIsOTPVerified] = useState<boolean>(false); // To track if OTP has been verified
  const [error, setError] = useState<string | null>(null); // State for error messages

  const navigate = useNavigate(); // Hook for navigation

  // Function to handle sending OTP to the provided email
  const handleSendOTP = async () => {
    try {
      console.log(formState.email)
      await axios.post(`${BACKEND_URL}/api/sendotp`, {
          email:formState.email
      }).then((data) => {
        console.log(data.data.message);
        alert(data.data.message);
      });
      setIsOTPSent(true); // Mark OTP as sent
    } catch (err) {
      setError("Failed to send OTP. Please try again."); // Handle OTP sending errors
    }
  };

  const handleVerifyOTP = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/verifyotp`,{
        email:formState.email,
        otp:otp
      });
      alert(response.data.message); 
      if (response.data.message === "OTP verified") {
        setIsOTPVerified(true); 
      } else {
        setIsOTPVerified(false); 
      }
    } catch (err) {
      setError("OTP verification failed. Please try again."); // Handle OTP verification errors
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
        name:formState.name,
        email: formState.email,
        password: formState.password,
      }
    );
      localStorage.setItem("admintoken", response.data.token);
      navigate("/admindashboard");
    } catch (err) {
      setError("Registration failed. Please try again."); // Handle registration errors
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <Link to="/adminsignin" className="font-medium text-primary hover:text-primary/80">
              sign in to your existing account
            </Link>
          </p>
        </div>
        {error && <div className="text-red-500 text-center">{error}</div>} {/* Display error message */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
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
                onChange={handleChange} // Update form state on change
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
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
                onChange={handleChange} // Update email state on change
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              />
              <div className="flex gap-2">
                <Button type="button" className="w-full" onClick={handleSendOTP} disabled={isOTPSent}>
                  {isOTPSent ? 'OTP Sent' : 'Send OTP'}
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="otp">OTP</Label>
            <Input id="otp" placeholder="Enter OTP" required value={otp} onChange={handleOtpChange} />
            <Button type="button" className="w-full" onClick={handleVerifyOTP} disabled={isOTPVerified}>
              {isOTPVerified ? 'OTP Verified' : 'Verify OTP'}
            </Button>
          </div>
          <div>
            <Label htmlFor="password" className="block text-sm font-medium text-muted-foreground">
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
                onChange={handleChange} // Update form state on change
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="confirm-password" className="block text-sm font-medium text-muted-foreground">
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
                onChange={handleChange} // Update form state on change
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
