import React, {  useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BACKEND_URL, HOSPITAL_CODE } from "@/config";

// Types
type Patient = {
  id: number;
  name: string;
  age: number;
  gender: string;
  reason: string;
  status: "Waiting" | "In Progress" | "Completed";
};

// Component
export function DoctorDashBoard() {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/doctor/getPatients`, {
        headers: {
          code: HOSPITAL_CODE,
          Authorization: localStorage.getItem("doctortoken"),
        },
      })
      .then((response) => {
        if (response.data.success) {
          const formattedPatients = response.data.patients.map((item: any) => ({
            id: item.patientInstance.abhaId,
            name: item.patientInstance.name,
            age: item.patientInstance.age,
            gender: item.patientInstance.Gender,
            reason: item.patientInstance.reason,
            status: item.status === "Pending" ? "Waiting" : item.status, 
          }));
          setPatients(formattedPatients);
        } else {
          console.log("Failed to fetch patients:", response.data.message);
        }
        console.log(patients)
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }, []);
  const statusColors = {
    Waiting: "bg-red-500 text-red-50",
    "In Progress": "bg-yellow-500 text-yellow-50",
    Completed: "bg-green-500 text-green-50",
  };

  return (
    <div className="flex h-screen w-screen absolute top-0 left-0 right-0">
      <div>
        
        {/* <div className="flex items-center gap-2 border-b pb-4"> */}
          {/* <div className="rounded-full bg-primary p-2 text-primary-foreground">
            <StethoscopeIcon className="h-6 w-6" />
          </div> */}
          {/* <h2 className="text-xl font-semibold">Dashboard</h2> */}
        <div className="flex items-center bg-neutral-950 justify-between w-screen p-4 border-b">
        <h1 className="text-4xl relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 font-bold ">Doctor Dashboard</h1>
        <Link to="/"><Button className="ml-auto bg-gradient-to-b from-indigo-500 to-purple-500">Home</Button></Link>
        </div>
        <div className="flex">
      <aside className="flex flex-col bg-neutral-950 h-screen w-72 border-r bg-background p-4 sm:p-6">
        <nav className="mt-6 flex flex-col gap-2">
          <span className="flex items-center gap-2 rounded-md px-3 py-2  text-muted-foreground">
          <Button className="ml-auto w-60 bg-purple-500 hover:bg-purple-800"> <ClipboardIcon className="h-5 w-5" /> 
            Ops</Button>
          </span>
              <span className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground">
                <Button className="ml-auto w-60 bg-purple-500 hover:bg-purple-800"><UserIcon className="h-5 w-5" />
            IPs</Button>
           
          </span>
          <span className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground">
            
            <Button className="ml-auto w-60 bg-purple-500 hover:bg-purple-800"><BarChartIcon className="h-5 w-5" />
            Analysis</Button>
          </span>
        </nav>
      </aside>
      <div className="flex-1 p-4 sm:p-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Ops</h3>
            <div className="grid gap-4">
              {patients.map((patient) => (
                <a key={patient.id} href={`/doctorconsultancy?abhaid=${patient.id}`} className="no-underline"><Card key={patient.id} className="relative">
                  <CardHeader className={`${statusColors[patient.status]} px-4 py-2 rounded-t-md`}>
                    <div className="absolute top-2 right-2 rounded-full bg-black px-2 py-1 text-xs font-medium">
                      {patient.status}
                    </div>
                    <div className="flex items-center gap-2">
                      <Avatar className="border-2 border-white">
                        <AvatarImage src="/placeholder-user.jpg" alt={patient.name} />
                        <AvatarFallback>{patient.name[0] + patient.name[1]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{patient.name}</div>
                        <div className="text-sm">{`${patient.age} years old, ${patient.gender}`}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 py-3">
                    <div className="text-sm text-muted-foreground">
                      Reason for visit: {patient.reason}
                    </div>
                  </CardContent>
                </Card></a>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">IPs</h3>
            <div className="grid gap-4" />
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Analysis</h3>
            <div className="grid gap-4" />
          </div>
        </div>
      </div>
    </div></div></div>
  );
}

// Icon Components
function BarChartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function ClipboardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}

function StethoscopeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
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
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
