import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

// Define the type for the login type
type LoginType = "main-store" | "sub-store" | "pharmacy" | "ward";

export function InventoryLogin() {
  const [loginType, setLoginType] = useState<LoginType | undefined>(undefined);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Login type:", loginType);
    console.log("Email:", email);
    console.log("Password:", password);

    // Navigate to different pages based on loginType
    if (loginType) {
      switch (loginType) {
        case "main-store":
          navigate("/mainstore"); // Adjust the route as needed
          break;
        case "sub-store":
          navigate("/substore"); // Adjust the route as needed
          break;
        case "pharmacy":
          navigate("/pharmacy"); // Adjust the route as needed
          break;
        case "ward":
          navigate("/ward"); // Adjust the route as needed
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#CFFFDC] flex items-center justify-center p-4 w-screen">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#2E6F40]">Inventory Login</h1>
          <p className="text-[#253D2C] mt-2">Enter your credentials to access your account.</p>
        </div>
        <Card className="bg-white shadow-lg border-[#68BA7F]">
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="type" className="text-[#253D2C]">Login as</Label>
              <Select onValueChange={(value) => setLoginType(value as LoginType)}>
                <SelectTrigger id="type" className="border-[#68BA7F] focus:ring-[#2E6F40]">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="main-store">Main Store</SelectItem>
                  <SelectItem value="sub-store">Sub Store</SelectItem>
                  <SelectItem value="pharmacy">Pharmacy</SelectItem>
                  <SelectItem value="ward">Ward</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#253D2C]">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-[#68BA7F] focus:ring-[#2E6F40]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#253D2C]">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-[#68BA7F] focus:ring-[#2E6F40]"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4 pt-6">
            <Button 
              onClick={handleLogin}
              className="w-full bg-[#68BA7F] hover:bg-[#2E6F40] text-white transition-colors"
            >
              Sign in
            </Button>
          </CardFooter>
        </Card>
        <div className="text-center text-[#253D2C]">
          Don't have an account?{" "}
          <Link to="/inventorysignup" className="text-[#2E6F40] hover:text-[#68BA7F] transition-colors font-medium">
            Register
          </Link>
        </div>
      </div>
    </div>
    
  );
}