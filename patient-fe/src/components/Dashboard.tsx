'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Leaf, Calendar, FileText, User } from 'lucide-react';
import { BACKEND_URL } from '../../config'



interface PatientDetails {
    abhaId:String;
    name: string;
    email: string;
    contact: string;
    address: string;
    gender:String;
  DOB:String;
  emergencyContact:String;
  medicalRecords:medicalRecords[];
  patientBooking: booking[];
}
interface booking{
  hospital: string;
  date: string;
  time: string;
  status: string;
  reason: string;
}
interface medicalRecords{ 
        visitReason:String
        treatmentSummary:String
        doctorName :String
        createdAt: Date 
      }



export function PatientProfile() {
    

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [patient, setPatient] = useState<PatientDetails | null>(null);
    const [isEditing, setIsEditing] = useState(false);
  const [editedPatient, setEditedPatient] = useState<Partial<PatientDetails>>({});
useEffect(() => {
    const getpatientdetails=async()=>{
        try{
        const data = await axios.get(`${BACKEND_URL}/api/patient/getdetails`, {
            headers: { Authorization:localStorage.getItem("patienttoken")}
        });
        setPatient(data.data.patient);
        setLoading(false);
    }
        catch(e){
            setError("error");
            setLoading(false);
        }
    }
    getpatientdetails();
},[]);

  
  console.log(patient?.name)
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!patient) return <div>No patient data found</div>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedPatient({ ...editedPatient, [e.target.name]: e.target.value });
  };
  
const updatePatient = async (patient: PatientDetails) => {
    try{
    await axios.put(`${BACKEND_URL}/api/patient/update`, patient);
    
}catch(err){
    setError("error");
}
}
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updatePatient(editedPatient as PatientDetails);
    setIsEditing(false);
  };

  return (
    <div className=" mx-auto p-6 animate-fade-in bg-[#CFFFDC] w-screen h-full min-h-screen">
      <div className="flex items-center gap-3 mb-6 ">
        <Leaf className="w-8 h-8 text-[#2E6F40]" />
        <h1 className="text-3xl font-bold text-[#2E6F40]">Patient Dashboard</h1>
      </div>

      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList className="grid grid-cols-3 gap-4 p-1 bg-[#CFFFDC] rounded-xl">
          <TabsTrigger value="profile" className="flex items-center gap-2 data-[state=active]:bg-[#2E6F40] data-[state=active]:text-white">
            <User className="w-4 h-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="medical-records" className="flex items-center gap-2 data-[state=active]:bg-[#2E6F40] data-[state=active]:text-white">
            <FileText className="w-4 h-4" />
            Medical Records
          </TabsTrigger>
          <TabsTrigger value="appointments" className="flex items-center gap-2 data-[state=active]:bg-[#2E6F40] data-[state=active]:text-white">
            <Calendar className="w-4 h-4" />
            Appointments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="animate-slide-in">
          <Card className="backdrop-blur-sm bg-white/90 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-[#2E6F40] text-2xl">Patient Profile</CardTitle>
              <CardDescription>Manage your personal information</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-[#253D2C]">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={isEditing ? editedPatient.name : patient?.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="border-2 border-[#68BA7F]/20 focus:border-[#2E6F40] focus:ring-1 focus:ring-[#2E6F40]/30 rounded-lg"
                    />
                  </div>
                  </div>
                  <div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      value={patient.email}
                      disabled
                      className="border-2 border-[#68BA7F]/20 focus:border-[#2E6F40] focus:ring-1 focus:ring-[#2E6F40]/30 rounded-lg"
                      
                    />
                    </div>
                  </div>
                  <div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">Contact</Label>
                    <Input
                      id="contact"
                      name="contact"
                      value={isEditing ? editedPatient.contact : patient.contact}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="border-2 border-[#68BA7F]/20 focus:border-[#2E6F40] focus:ring-1 focus:ring-[#2E6F40]/30 rounded-lg"

                    />
                  </div>
                  <div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      value={isEditing ? editedPatient.address : patient.address}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="border-2 border-[#68BA7F]/20 focus:border-[#2E6F40] focus:ring-1 focus:ring-[#2E6F40]/30 rounded-lg"

                    />
                  </div>
                  </div>

                  <div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Input
                      id="gender"
                      name="gender"
                      value={isEditing ? editedPatient.gender : patient.gender}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="border-2 border-[#68BA7F]/20 focus:border-[#2E6F40] focus:ring-1 focus:ring-[#2E6F40]/30 rounded-lg"

                    />
                  </div>
                  </div>

                  <div>
                  <div className="space-y-2">
                    <Label htmlFor="DOB">Date of Birth</Label>
                    <Input
                      id="DOB"
                      name="DOB"
                      value={isEditing ? editedPatient.DOB : patient.DOB}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="border-2 border-[#68BA7F]/20 focus:border-[#2E6F40] focus:ring-1 focus:ring-[#2E6F40]/30 rounded-lg"

                    />
                  </div>
                  </div>

                  <div>
                  <div className="space-y-2">
                    
                    <Label htmlFor="emergencyContact">Emergency Contact</Label>
                    <Input
                      id="emergencyContact"
                      name="emergencyContact"
                      value={isEditing ? editedPatient.emergencyContact : patient.emergencyContact}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="border-2 border-[#68BA7F]/20 focus:border-[#2E6F40] focus:ring-1 focus:ring-[#2E6F40]/30 rounded-lg"

                    />
                  </div>
                  </div>

                </div>
              </form>
            </CardContent>
            <CardFooter className="flex gap-3">
              {isEditing ? (
                <>
                  <Button type="submit" onClick={handleSubmit} className="bg-[#2E6F40] hover:bg-[#2E6F40]/90 text-white transition-all duration-200 hover:shadow-lg active:scale-95">
                    Save Changes
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)} className="border-2 border-[#2E6F40] text-[#2E6F40] hover:bg-[#CFFFDC] transition-all duration-200">
                    Cancel
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)} className="bg-[#2E6F40] hover:bg-[#2E6F40]/90 text-white transition-all duration-200 hover:shadow-lg active:scale-95">
                  Edit Profile
                </Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="medical-records" className="animate-slide-in">
          <Card className="backdrop-blur-sm bg-white/90 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-[#2E6F40] text-2xl">Medical Records</CardTitle>
              <CardDescription>Your complete medical history</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>Your complete medical history record</TableCaption>
                <TableHeader>
                  <TableRow className="border-b-2 border-[#68BA7F]">
                    <TableHead className="text-[#2E6F40] font-semibold">Date</TableHead>
                    <TableHead className="text-[#2E6F40] font-semibold">Diagnosis</TableHead>
                    <TableHead className="text-[#2E6F40] font-semibold">Treatment</TableHead>
                    <TableHead className="text-[#2E6F40] font-semibold">Doctor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patient?.medicalRecords.map((record, index) => (
                    <TableRow key={index} className="hover:bg-[#CFFFDC]/50 transition-colors duration-200">
                      <TableCell>{new Date(record.createdAt).toLocaleDateString()}</TableCell>
                      <TableCell>{record.visitReason}</TableCell>
                      <TableCell>{record.treatmentSummary}</TableCell>
                      <TableCell>{record.doctorName}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appointments" className="animate-slide-in">
          <Card className="backdrop-blur-sm bg-white/90 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-[#2E6F40] text-2xl">Upcoming Appointments</CardTitle>
              <CardDescription>Track your scheduled appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableCaption>List of your upcoming medical appointments</TableCaption>
                <TableHeader>
                  <TableRow className="border-b-2 border-[#68BA7F]">
                    <TableHead className="text-[#2E6F40] font-semibold">Date</TableHead>
                    <TableHead className="text-[#2E6F40] font-semibold">Time</TableHead>
                    <TableHead className="text-[#2E6F40] font-semibold">Hospital</TableHead>
                    <TableHead className="text-[#2E6F40] font-semibold">Reason</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patient?.patientBooking
                    .filter(booking => booking.status === "Upcoming")
                    .map((booking, index) => (
                      <TableRow key={index} className="hover:bg-[#CFFFDC]/50 transition-colors duration-200">
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>{booking.time}</TableCell>
                        <TableCell>{booking.hospital}</TableCell>
                        <TableCell>{booking.reason}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}