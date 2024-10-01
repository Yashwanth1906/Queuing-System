import { useEffect, useState } from 'react'
import { Bell, Search, Settings, UserCircle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BACKEND_URL, HOSPITAL_CODE } from '@/config'

type Patient = {
  id: number;
  name: string;
  age: number;
  gender: string;
  reason: string;
  status: "Waiting" | "In Progress" | "Completed";
};

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
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt={patient.name} />
              <AvatarFallback>{patient.name.slice(0, 2).toUpperCase()}</AvatarFallback>
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

export function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('');
  const [patients, setPatients] = useState<Patient[]>([]);
  useEffect(() => {
    console.log(localStorage.getItem("doctortoken"))
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
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-purple-600">Doctor Dashboard</h2>
        </div>
        <nav className="mt-6">
          {['OutPatient', 'InPatient', 'Analysis'].map((item) => (
            <Button
              key={item}
              variant={activeTab === item.toLowerCase() ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveTab(item.toLowerCase())}
            >
              {item}
            </Button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <Input className="w-64" placeholder="Search..." />
            <div className="flex items-center space-x-4">
              <Button size="icon" variant="ghost">
                <Bell className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Search className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback>
                  <UserCircle className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          {activeTab === 'outpatient' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {patients.map(patient => (
                <PatientCard key={patient.id} patient={patient} />
              ))}
            </div>
          )}
          {activeTab === 'inpatient' && (
            <p>InPatient content goes here</p>
          )}
          {activeTab === 'analysis' && (
            <p>Analysis content goes here</p>
          )}
        </div>
      </main>
    </div>
  )
}