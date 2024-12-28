import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Hospital, Building2, Users, BedDouble, Plus, Menu } from 'lucide-react';
import '../App.css';
import axios from 'axios';
import { BACKEND_URL } from '@/config';
import { useNavigate } from 'react-router-dom';
import { AddHospitalDialog } from '@/components/addHospital';

interface Hospital {
  name: string;
  location: string;
  code: string;
  city:string;
  state:string
}

export function HomePage() {
  const navigate = useNavigate();
  const [hospitals,setHospitals] = useState<Hospital[]>([]);
  const [addHospital,setAddHospital] = useState<boolean>(false);
  async function getHospitals(){
    await axios.get(`${BACKEND_URL}/api/hospital/gethospitals`)
    .then((res)=>{
        console.log(res.data.hospitals);
        setHospitals(res.data.hospitals);
    }).catch((e)=>{
      console.log(e);
    })
  }
    useEffect(()=>{
        getHospitals();
    },[])
  return (
    <div className="min-h-screen bg-[#CFFFDC]">
      {/* Top Navigation Bar */}
      <nav className="bg-[#2E6F40] text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Hospital className="h-6 w-6" />
            <span className="text-xl font-bold">HealthCare Admin</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-[#68BA7F]">
              <Building2 className="mr-2 h-4 w-4" />
              Hospitals
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:bg-[#68BA7F]">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Plus className="mr-2 h-4 w-4" />
                  Register Hospital
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  Assign Doctors
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BedDouble className="mr-2 h-4 w-4" />
                  Manage Wards
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#253D2C]">Hospitals Overview</h1>
          <Button className="bg-[#2E6F40] hover:bg-[#68BA7F]" onClick={()=> setAddHospital(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Add New Hospital
          </Button>
        </div>
        <AddHospitalDialog open={addHospital} onOpenChange={setAddHospital}/>
        {/* Hospital Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hospitals.map((hospital) => (
            <Card key={hospital.code} className="hover:shadow-xl transition-shadow" onClick={()=>{
              navigate(`/hospital/${hospital.code}`)
            }}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-[#2E6F40] mb-2">
                      {hospital.name}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">{hospital.location} + {hospital.city} + {hospital.state}</p>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="font-medium">Hospital Code:</span> {hospital.code}
                      </p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Menu className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        Manage Doctors
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <BedDouble className="mr-2 h-4 w-4" />
                        Manage Wards
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Remove Hospital
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}