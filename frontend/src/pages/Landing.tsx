import React, { useState } from "react";
import { SigninDoctor } from "./Doctor/signin"; // Example Doctor signin component
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Navbar } from "@/components/component/navbar";
// Defining props for icons
interface IconProps {
  className?: string;
}

// Landing Page Component
export function LandingPage() {
  // State management for active section, just for example purposes
  const [activeSection, setActiveSection] = useState<string>("");

  // Use navigate for programmatic routing
  const navigate = useNavigate();

  return (
   <div>
    <div className="flex flex-col h-screen w-screen from-neutral-950 to-neutral-800  absolute top-0 left-0 right-0 ">
      {/* Header */}
      
      <Navbar/>
      <BackgroundBeamsWithCollision>
      {/* Main Section */}

      <main className="flex-1 flex flex-col items-center  justify-center  px-4 md:px-6">
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-6xl relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            Hospital Management System
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Streamline your hospital operations with our comprehensive management system.
          </p>
        </div>

        {/* Clickable Icons for Navigation */}
        <div className="mt-12 grid grid-cols-1 text-muted-foreground sm:grid-cols-3 gap-8">
          <Link
            to="/adminsignin"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <HospitalIcon className="w-12 h-12 text-muted-foreground " />
            <h3 className="mt-2 text-lg font-semibold">Hospital Admin</h3>
          </Link>
          <Link
            to="/doctorssignin"
            className="flex flex-col items-center justify-center cursor-pointer"
          >
            <HospitalIcon className="w-12 h-12  text-muted-foregroundtext-primary" />
            <h3 className="mt-2 text-lg text-muted-foreground font-semibold">Doctors</h3>
          </Link>
          <Link
            to="/inventorysignin"
            className="flex flex-col items-center text-muted-foreground justify-center cursor-pointer"
          >
            <WarehouseIcon className="w-12 h-12 text-muted-foreground " />
            <h3 className="mt-2 text-lg  text-muted-foreground font-semibold">Inventory</h3>
          </Link>
        </div>
        </main>
        

      {/* Footer */}
      {/* <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <p>About Us</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>News</p>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <p>Hospital Admin</p>
            <p>Doctors</p>
            <p>Inventory</p>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <p>Documentation</p>
            <p>Support</p>
            <p>FAQs</p>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <p>Sales</p>
            <p>Support</p>
            <p>Partnerships</p>
          </div>
        </div>
      </footer> */}
           </BackgroundBeamsWithCollision>
      </div>
     
      </div>
      
  );
}

// Hospital Icon Component
const HospitalIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 6v4" />
    <path d="M14 14h-4" />
    <path d="M14 18h-4" />
    <path d="M14 8h-4" />
    <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
    <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
  </svg>
);

// Warehouse Icon Component
const WarehouseIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
    <path d="M6 18h12" />
    <path d="M6 14h12" />
    <rect width="12" height="12" x="6" y="10" />
  </svg>
);

export default LandingPage;
