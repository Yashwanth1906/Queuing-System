import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function InventoryRegister() {
  const [accountType, setAccountType] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleAccountTypeChange = (value: string) => {
    setAccountType(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Additional logic can be added here if needed
  };

  const getRedirectLink = () => {
    switch (accountType) {
      case "main-store":
        return "/mainstore";
      case "sub-store":
        return "/substore";
      case "pharmacy":
        return "/pharmacy";
      case "ward":
        return "/ward";
      default:
        return "#";
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#CFFFDC] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#2E6F40]">Create your account</h2>
          <p className="mt-2 text-center text-sm text-[#253D2C]">
            Or{" "}
            <Link to="/inventorysignin" className="font-medium text-[#68BA7F] hover:text-[#2E6F40]">
              sign in to your existing account
            </Link>
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="account-type" className="block text-sm font-medium text-[#253D2C]">
              Account Type
            </Label>
            <div className="mt-1">
              <Select onValueChange={handleAccountTypeChange}>
                <SelectTrigger id="account-type" aria-label="Select account type">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="main-store">Main Store</SelectItem>
                  <SelectItem value="sub-store">Sub Store</SelectItem>
                  <SelectItem value="pharmacy">Pharmacy</SelectItem>
                  <SelectItem value="ward">Ward</SelectItem>
                </SelectContent>
              </Select>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full appearance-none rounded-md border border-[#68BA7F] bg-[#CFFFDC] px-3 py-2 placeholder-[#253D2C] shadow-sm focus:border-[#2E6F40] focus:outline-none focus:ring-1 focus:ring-[#2E6F40] sm:text-sm"
              />
            </div>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full appearance-none rounded-md border border-[#68BA7F] bg-[#CFFFDC] px-3 py-2 placeholder-[#253D2C] shadow-sm focus:border-[#2E6F40] focus:outline-none focus:ring-1 focus:ring-[#2E6F40] sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="confirm-password" className="block text-sm font-medium text-[#253D2C]">
              Confirm Password
            </Label>
            <div className="mt-1">
              <Input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="current-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full appearance-none rounded-md border border-[#68BA7F] bg-[#CFFFDC] px-3 py-2 placeholder-[#253D2C] shadow-sm focus:border-[#2E6F40] focus:outline-none focus:ring-1 focus:ring-[#2E6F40] sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Link to={getRedirectLink()}>
              <Button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#2E6F40] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#234F30] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E6F40] focus-visible:ring-offset-2"
              >
                Sign up
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
