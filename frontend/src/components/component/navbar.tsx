import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import { Button } from "../ui/button";
interface IconProps {
    className?: string;
  }
  
export function Navbar() {
    const [activeSection, setActiveSection] = useState<string>("");
    
      

  const navigate = useNavigate();
    return (

        <div className="px-4 lg:px-6 h-32 flex  bg-neutral-950  relative  bg-items-center py-6 ">
        <div className="flex items-center justify-center cursor-pointer" onClick={() => navigate("/")}>
          <HospitalIcon  className="size-6 text-muted-foreground " />
          <span className="sr-only text-muted-foreground ">Hospital Management System</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button
            className={`text-sm font-medium hover:underline  text-white  underline-offset-4 cursor-pointer ${activeSection === "admin" ? "text-primary" : ""}`}
            onClick={() => {
              setActiveSection("admin");
              navigate("/adminsignin"); // Navigate to admin page
            }}
          >
            Hospital Admin
          </Button>
          <Button
            className={`text-sm font-medium  text-white hover:underline underline-offset-4 cursor-pointer ${activeSection === "doctors" ? "text-primary" : ""}`}
            onClick={() => {
              setActiveSection("doctors");
              navigate("/doctorssignin"); // Navigate to doctor sign-in
            }}
          >
            Doctors
          </Button>
          <Button
            className={`text-sm font-medium hover:underline text-white -offset-4 cursor-pointer ${activeSection === "inventory" ? "text-primary" : ""}`}
            onClick={() => {
              setActiveSection("inventory");
              navigate("/inventorysignin"); // Navigate to inventory page
            }}
          >
            Inventory
          </Button>
        </nav>
      </div>
    );
}
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
  // const WarehouseIcon: React.FC<IconProps> = ({ className }) => (
  //   <svg
  //     className={className}
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="24"
  //     height="24"
  //     viewBox="0 0 24 24"
  //     fill="none"
  //     stroke="currentColor"
  //     strokeWidth="2"
  //     strokeLinecap="round"
  //     strokeLinejoin="round"
  //   >
  //     <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
  //     <path d="M6 18h12" />
  //     <path d="M6 14h12" />
  //     <rect width="12" height="12" x="6" y="10" />
  //   </svg>
  // );