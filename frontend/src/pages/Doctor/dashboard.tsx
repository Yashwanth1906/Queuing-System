import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { BACKEND_URL, HOSPITAL_CODE } from "@/config";
import axios from "axios";

// Types
type Patient = {
  id: number;
  name: string;
  age: number;
  gender: string;
  reason: string;
  status: "Waiting" | "In Progress" | "Completed";
};

// PatientCard Component
function PatientCard({ patient }: { patient: Patient }) {
  const statusColors = {
    Waiting: "bg-red-500 text-red-50",
    "In Progress": "bg-yellow-500 text-yellow-50",
    Completed: "bg-green-500 text-green-50",
  };

  return (
    <Link to={`/doctorconsultancy?abhaid=${patient.id}`} className="no-underline">
      <Card key={patient.id} className="relative">
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
      </Card>
    </Link>
  );
}

// DoctorDashBoard Component
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
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar and other content omitted for brevity */}
      <div className="flex-1 p-4 sm:p-6">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Ops</h3>
            <div className="grid gap-4">
              {patients.map((patient) => (
                <PatientCard key={patient.id} patient={patient} />
              ))}
            </div>
          </div>
          {/* Additional sections omitted for brevity */}
        </div>
      </div>
    </div>
  );
}
