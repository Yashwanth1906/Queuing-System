import {  useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Hospital, Users, BedDouble, Plus, ArrowLeft, Calendar, Activity, Building2, MoreVertical } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { AddDoctorDialog } from '@/components/addDoctor';
import { AddDepartmentDialog } from '@/components/addDepartment';
import { AddWardDialog } from '@/components/addWard';
import axios from 'axios';
import { BACKEND_URL } from '@/config';

interface Ward {
  id: string;
  name: string;
  totalBeds: number;
  availableBeds: number;
}

interface Doctor {
  id: string;
  name: string;
  specialization: string;
}

interface OPDData {
  date: string;
  day: string;
  holiday: string;
  specialEvent: string;
  totalPatients: number;
  doctors: number;
  time: string;
  ppdh: number;
  weather: string;
}

interface Department {
  id: string;
  name: string;
  doctors: number;
}


export function HospitalDetailsPage() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [flag,setFlag] = useState<boolean | null>(false);
  console.log(id);
  const [selectedDays, setSelectedDays] = useState("7");
  const [doctorDialogOpen, setDoctorDialogOpen] = useState(false);
  const [departmentDialogOpen, setDepartmentDialogOpen] = useState(false);
  const [wardDialogOpen, setWardDialogOpen] = useState(false);
  const [departments,setDepartments] = useState<Department[] | null>([]);
  const [wards,setWards] = useState<Ward[] | null>([]);
  const [doctors,setDoctors] = useState<Doctor[] | null>([]);
  // const [opdData,setOpdDate] = useState<OPDData[] | null>([]);
  // const wards: Ward[] = [
  //   { id: "w1", name: "General Ward", totalBeds: 50, availableBeds: 12 },
  //   { id: "w2", name: "ICU", totalBeds: 20, availableBeds: 4 },
  //   { id: "w3", name: "Pediatric Ward", totalBeds: 30, availableBeds: 8 },
  //   { id: "w4", name: "Maternity Ward", totalBeds: 25, availableBeds: 6 },
  // ];
  
  // const doctors: Doctor[] = [
  //   { id: "d1", name: "Dr. John Smith", specialization: "Cardiology" },
  //   { id: "d2", name: "Dr. Sarah Lee", specialization: "Pediatrics" },
  //   { id: "d3", name: "Dr. Mark Taylor", specialization: "Neurology" },
  //   { id: "d4", name: "Dr. Emily White", specialization: "Orthopedics" },
  // ];
  
  const opdData: OPDData[] = [
    {
      date: "2024-12-28",
      day: "Saturday",
      holiday: "No",
      specialEvent: "Free Health Checkup",
      totalPatients: 350,
      doctors: 15,
      time: "9:00 AM - 5:00 PM",
      ppdh: 44,
      weather: "Sunny",
    },
    {
      date: "2024-12-27",
      day: "Friday",
      holiday: "No",
      specialEvent: "Vaccination Drive",
      totalPatients: 280,
      doctors: 12,
      time: "9:00 AM - 4:00 PM",
      ppdh: 35,
      weather: "Cloudy",
    },
    {
      date: "2024-12-26",
      day: "Thursday",
      holiday: "No",
      specialEvent: "None",
      totalPatients: 300,
      doctors: 14,
      time: "9:00 AM - 5:00 PM",
      ppdh: 38,
      weather: "Rainy",
    },
  ];
  
  // const departments: Department[] = [
  //   { id: "dept1", name: "Cardiology", doctors: 5 },
  //   { id: "dept2", name: "Neurology", doctors: 4 },
  //   { id: "dept3", name: "Pediatrics", doctors: 3 },
  //   { id: "dept4", name: "Orthopedics", doctors: 6 },
  // ];
  

  async function getDetails(){
    console.log("Id: "+id);
    await axios.get(`${BACKEND_URL}/api/hospital/getdetails`,{
      headers:{
        code:id
      }
    }).then((res)=>{
      console.log(res.data.departments);
      setDepartments(res.data.departments);
      setDoctors(res.data.doctors);
      setWards(res.data.wards);
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getDetails();
  },[])
  

  return (
    <div className="min-h-screen bg-[#CFFFDC]">
      {/* Top Navigation Bar */}
      <nav className="bg-[#2E6F40] text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-[#68BA7F]"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Hospital className="h-6 w-6" />
            <span className="text-xl font-bold">City General Hospital</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Action Buttons */}
        <div className="flex gap-4 mb-8">
        <Button 
            className="bg-[#2E6F40] hover:bg-[#68BA7F]"
            onClick={() => setDoctorDialogOpen(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Doctor
          </Button>
          <Button 
            className="bg-[#2E6F40] hover:bg-[#68BA7F]"
            onClick={() => setWardDialogOpen(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Ward
          </Button>
          <Button 
            className="bg-[#2E6F40] hover:bg-[#68BA7F]"
            onClick={() => setDepartmentDialogOpen(true)}
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Department
          </Button>
        </div>

        <AddDoctorDialog 
          open={doctorDialogOpen} 
          onOpenChange={setDoctorDialogOpen}
        />
        <AddWardDialog 
          open={wardDialogOpen} 
          onOpenChange={setWardDialogOpen}
        />
        <AddDepartmentDialog 
          open={departmentDialogOpen} 
          onOpenChange={setDepartmentDialogOpen}
        />

        {/* Departments Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#2E6F40] flex items-center">
                <Building2 className="mr-2 h-5 w-5" />
                Departments
              </h2>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Department Name</TableHead>
                  <TableHead>Total Doctors</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {departments?.map((dept) => (
                  <TableRow key={dept.id}>
                    <TableCell>{dept.name}</TableCell>
                    <TableCell>{dept.doctors}</TableCell>
                      {/* <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Doctors Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#2E6F40] flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Doctors
              </h2>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Specialization</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {doctors?.map((doctor) => (
                  <TableRow key={doctor.id}>
                    <TableCell>{doctor.name}</TableCell>
                    <TableCell>{doctor.specialization}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Ward Status Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#2E6F40] flex items-center">
                <BedDouble className="mr-2 h-5 w-5" />
                Ward Status
              </h2>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ward Name</TableHead>
                  <TableHead>Total Beds</TableHead>
                  <TableHead>Available Beds</TableHead>
                  <TableHead>Occupancy Rate</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {wards?.map((ward) => (
                  <TableRow key={ward.id}>
                    <TableCell>{ward.name}</TableCell>
                    <TableCell>{ward.totalBeds}</TableCell>
                    <TableCell>{ward.availableBeds}</TableCell>
                    <TableCell>
                      {Math.round(((ward.totalBeds - ward.availableBeds) / ward.totalBeds) * 100)}%
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>
                            <BedDouble className="mr-2 h-4 w-4" />
                            Allocate Bed
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* OPD Data Section */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#2E6F40] flex items-center">
                <Activity className="mr-2 h-5 w-5" />
                OPD Statistics
              </h2>
              <Select value={selectedDays} onValueChange={setSelectedDays}>
                <SelectTrigger className="w-[180px]">
                  <Calendar className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">Last 7 days</SelectItem>
                  <SelectItem value="30">Last 30 days</SelectItem>
                  <SelectItem value="90">Last 90 days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Day</TableHead>
                  <TableHead>Holiday</TableHead>
                  <TableHead>Special Event</TableHead>
                  <TableHead>Number of Patients</TableHead>
                  <TableHead>Number of Doctors</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>PPDH</TableHead>
                  <TableHead>Weather</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {opdData?.map((data) => (
                  <TableRow key={data.date}>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>{data.day}</TableCell>
                    <TableCell>{data.holiday}</TableCell>
                    <TableCell>{data.specialEvent}</TableCell>
                    <TableCell>{data.totalPatients}</TableCell>
                    <TableCell>{data.doctors}</TableCell>
                    <TableCell>{data.time}</TableCell>
                    <TableCell>{data.ppdh.toFixed(1)}</TableCell>
                    <TableCell>{data.weather}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}