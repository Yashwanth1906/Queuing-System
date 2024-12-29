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
  abhaId: number;
  name: string;
  age: number;
  Gender: string;
  reason: string;
};

function PatientCard({ patient }: { patient: Patient }) {
  return (
    <Link to={`/doctorconsultancy?abhaid=${patient.abhaId}`} className="no-underline">
      <Card key={patient.abhaId} className="relative bg-white">
        <CardHeader className={` px-4 py-2 rounded-t-md`}>
          <div className="flex items-center gap-2">
            <Avatar className="border-2 border-[#CFFFDC]">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt={patient.name} />
              <AvatarFallback>{patient.name}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium text-[#253D2C]">{patient.name}</div>
              <div className="text-sm text-[#253D2C]">{`${patient.age} years old, ${patient.Gender}`}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 py-3">
          <div className="text-sm text-[#253D2C]">
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
          console.log(response.data.patients)
          setPatients(response.data.patients);
        } else {
          console.log("Failed to fetch patients:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching patients:", error);
      });
  }, []);
  return (
    <div className="flex h-screen w-screen absolute top-0 left-0 bg-[#CFFFDC]">
      <aside className="w-64 bg-[#CFFFDC] shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-[#2E6F40]">Doctor Dashboard</h2>
        </div>
        <nav className="mt-6">
          {['OutPatient', 'InPatient', 'Analysis'].map((item) => (
            <Button
              key={item}
              variant={activeTab === item.toLowerCase() ? "secondary" : "ghost"}
              className={`w-full justify-start ${
                activeTab === item.toLowerCase() ? 'bg-[#68BA7F] text-[#253D2C]' : 'text-[#253D2C]'
              } hover:bg-[#68BA7F] hover:text-[#253D2C]`}
              onClick={() => setActiveTab(item.toLowerCase())}
            >
              {item}
            </Button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <header className="bg-[#CFFFDC] shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <Input className="w-64 border-[#68BA7F] focus:border-[#2E6F40] focus:ring-[#2E6F40]" placeholder="Search..." />
            <div className="flex items-center space-x-4">
              <Button size="icon" variant="ghost" className="text-[#2E6F40] hover:bg-[#68BA7F] hover:text-[#253D2C]">
                <Bell className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-[#2E6F40] hover:bg-[#68BA7F] hover:text-[#253D2C]">
                <Search className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-[#2E6F40] hover:bg-[#68BA7F] hover:text-[#253D2C]">
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
          <h1 className="text-2xl font-semibold mb-4 text-[#2E6F40]">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          {activeTab === 'outpatient' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {patients.map(patient => {
                console.log(patient )
                return <PatientCard key={patient[0].abhaId} patient={patient[0]} />
})}
            </div>
          )}
          {activeTab === 'inpatient' && (
            <p className="text-[#253D2C]">InPatient content goes here</p>
          )}
          {activeTab === 'analysis' && (
            <p className="text-[#253D2C]">Analysis content goes here</p>
          )}
        </div>
      </main>
    </div>
  )
}

