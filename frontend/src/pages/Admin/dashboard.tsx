// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { BACKEND_URL, HOSPITAL_CODE } from "@/config";
// import { error } from "console";

// interface PatientDetails {
//   name: string;
//   Age: number;
//   gender: string;
//   reason: string;
// }

// interface Doctor {
//   name: string;
//   status: "online" | "offline";
// }

// const statusColors = {
//   Waiting: "bg-red-500 text-red-50",
//   "In Progress": "bg-yellow-500 text-yellow-50",
//   Completed: "bg-green-500 text-green-50",
// };

// export function Admindashboard() {
//   const [activeView, setActiveView] = useState<"activeDoctors" | "inactiveDoctors" | "newPatientForm" | null>(null);
//   const [patientDetails, setPatientDetails] = useState<PatientDetails | null>(null);
//   const [reason, setReason] = useState('');
//   const [abhaId,setAbhaId]  = useState("");
//   const [doctors, setDoctors] = useState<Doctor[]>([
//     { name: "Dr. John Doe", status: "online" },
//     { name: "Dr. Jane Smith", status: "online" },
//     { name: "Dr. Michael Johnson", status: "offline" },
//     { name: "Dr. Emily Brown", status: "offline" },
//     { name: "Dr. David Lee", status: "online" },
//     { name: "Dr. Sarah Wilson", status: "offline" },
//   ]);

//   const handleReasonChange = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
//     setReason(e.target.value);
//   };

//   const handleAbhaIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setAbhaId(e.target.value);
//   };
//   const getActiveDoctors = () => doctors.filter((doctor) => doctor.status === "online");

//   const getInactiveDoctors = () => doctors.filter((doctor) => doctor.status === "offline");

//   const renderActiveDoctors = () => (
//     <Card>
//       <CardHeader>
//         <CardTitle>Active Doctors</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <ul className="space-y-2">
//           {getActiveDoctors().map((doctor) => (
//             <li key={doctor.name} className="flex items-center justify-between cursor-pointer hover:bg-muted/50 rounded-md p-2">
//               <div className="font-medium">{doctor.name}</div>
//               <Badge variant="secondary">Online</Badge>
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   );

//   const renderInactiveDoctors = () => (
//     <Card>
//       <CardHeader>
//         <CardTitle>Inactive Doctors</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <ul className="space-y-2">
//           {getInactiveDoctors().map((doctor) => (
//             <li key={doctor.name} className="flex items-center justify-between cursor-pointer hover:bg-muted/50 rounded-md p-2">
//               <div className="font-medium">{doctor.name}</div>
//               <Badge variant="outline">Offline</Badge>
//             </li>
//           ))}
//         </ul>
//       </CardContent>
//     </Card>
//   );

//   const renderNewPatientForm = () => (
//     <Card>
//       <CardHeader>
//         <CardTitle>New Patient</CardTitle>
//         <CardDescription>Enter the patient's Abha ID to get their details.</CardDescription>
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <div className="grid grid-cols-[auto_1fr] gap-4">
//           <Label htmlFor="abha-id">Abha ID</Label>
//           <Input id="abha-id" placeholder="Enter Abha ID" value={abhaId} onChange={handleAbhaIdChange}/>
//         </div>
//         <div className="flex justify-end gap-2">
//           <Button
//             type="submit"
//             onClick={() => {
//               axios.get(`${BACKEND_URL}/api/admin/getpatient`,{
//                 headers:{
//                   abhaid:abhaId
//                 }
//               }).then((data)=>{
//                   console.log(data.data.patient);
//                   setPatientDetails(data.data.patient)
//                   setActiveView(null);
//               }).catch((err)=>{
//                 console.log(err)
//               })
//             }}
//           >
//             Get Details
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Top Dashboard */}
//       <div className="flex items-center justify-between bg-gray-100 p-4 border-b">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <Link to="/adminsignin"><Button className="ml-auto">Home</Button></Link>
//       </div>

//       {/* Main Content */}
//       <div className="grid grid-cols-[280px_1fr] flex-1">
//         <div className="flex flex-col border-r bg-muted/40 p-4">
//           <div className="flex flex-col gap-4">
//             <Button onClick={() => setActiveView("newPatientForm")}>New Patient</Button>
//             <Button onClick={() => { setActiveView("activeDoctors"); setPatientDetails(null); }}>Active Doctors</Button>
//             <Button onClick={() => { setActiveView("inactiveDoctors"); setPatientDetails(null); }}>Inactive Doctors</Button>
            
//           </div>
//         </div>
//         <div className="flex flex-col p-6">
//           {activeView === "activeDoctors" && renderActiveDoctors()}
//           {activeView === "inactiveDoctors" && renderInactiveDoctors()}
//           {activeView === "newPatientForm" && renderNewPatientForm()}
//           {patientDetails &&(
//             <Card>
//               <CardHeader>
//                 <CardTitle>Patient Details</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="name">Name</Label>
//                     <Input id="name" defaultValue={patientDetails.name} />
//                   </div>
//                   <div>
//                     <Label htmlFor="age">Age</Label>
//                     <Input id="age" type="number" defaultValue={patientDetails.Age} />
//                   </div>
//                   <div>
//                     <Label htmlFor="gender">Gender</Label>
//                     <Input id="gender" defaultValue={patientDetails.gender} />
//                   </div>
//                   <div>
//                     <Label htmlFor="reason">Reason</Label>
//                     <Textarea id="reason" placeholder="Enter reason for visit" value={reason} onChange={handleReasonChange}   />
//                   </div>
//                 </div>
//                 <div className="flex justify-center gap-2">
//                   <Button type="submit" className="align-center" onClick={async()=>{
//                     let doctors = "";
//                     await axios.get(`${BACKEND_URL}/api/doctor/alldoctors`,{
//                       headers: {
//                         code: HOSPITAL_CODE,
//                       }
//                     }
//                     ).then((data)=>{
//                       doctors = data.data.doctors;
//                       console.log(doctors)
//                     })
//                     await axios.post("http://localhost:8000/predict/",
//                       {
//                         symptom:reason,
//                         doctors:doctors
//                       }
//                     ).then((data)=>{
//                       if(data.data.error != null){
//                         alert(data.data.error)
//                       }
//                       console.log(data.data.doctor)
//                     })
//                   }}>Allocate Doctor</Button>
//                 </div>
//               </CardContent>
//             </Card>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL, HOSPITAL_CODE } from "@/config";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";


import { AlertTriangle } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";


interface PatientDetails {
  abhaId :string,
  name: string;
  Age: number;
  gender: string;
  reason: string;
}

interface Doctor {
  id: string;
  name: string;
  department: { name: string };
  _count: { opdQueue: number };
}

const statusColors = {
  Waiting: "bg-red-500 text-red-50",
  "In Progress": "bg-yellow-500 text-yellow-50",
  Completed: "bg-green-500 text-green-50",
};

interface FormState {
  name: string;
  contact: string;
  address: string;
  gender: string;
  dob: Date | undefined;
  emergencyContact: string;
  abhaid?:string;
}

export function Admindashboard() {
  const [activeView, setActiveView] = useState<"activeDoctors" | "inactiveDoctors" | "newPatientForm" | "createABHA" | "popupcard" | null>(null);
  const [patientDetails, setPatientDetails] = useState<PatientDetails | null>(null);
  const [reason, setReason] = useState('');
  const [abhaId, setAbhaId] = useState("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [allocatedDoctor, setAllocatedDoctor] = useState<Doctor | null>(null); // State for the allocated doctor
  const [formState, setFormState] = useState<FormState>({
    name: '',
    contact: '',
    address: '',
    gender: '',
    dob: undefined,
    emergencyContact: '',
    abhaid:undefined,
  });
  
  const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReason(e.target.value);
  };

  const handleAbhaIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAbhaId(e.target.value);
  };

  // const getActiveDoctors = () => doctors.filter((doctor) => doctor.status === "online");

  // const getInactiveDoctors = () => doctors.filter((doctor) => doctor.status === "offline");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  
  const handleGenderChange = (value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      gender: value,
    }));
  };
  
  const handleDateChange = (date: Date | undefined) => {
    setFormState((prevState) => ({
      ...prevState,
      dob: date,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name || !formState.contact || !formState.address || !formState.gender || !formState.dob) {
      alert('Please fill out all fields.');
      return;
    }
    const response =await axios.post(`${BACKEND_URL}/api/admin/createPatient`,formState)
    const {abhaid} = response.data;
    setFormState((prevState) => ({
      ...prevState,
      abhaid, 
    }));
    console.log("ABHA ID:"+formState.abhaid)
    setActiveView("popupcard")
    console.log('Form submitted:', formState);
  };
  

  const renderActiveDoctors = () => (
    <Card>
      <CardHeader>
        <CardTitle>Active Doctors</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {/* {getActiveDoctors().map((doctor) => (
            <li key={doctor.name} className="flex items-center justify-between cursor-pointer hover:bg-muted/50 rounded-md p-2">
              <div className="font-medium">{doctor.name}</div>
              <Badge variant="secondary">Online</Badge>
            </li>
          ))} */}
        </ul>
      </CardContent>
    </Card>
  );

  const renderInactiveDoctors = () => (
    <Card>
      <CardHeader>
        <CardTitle>Inactive Doctors</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {/* {getInactiveDoctors().map((doctor) => (
            <li key={doctor.name} className="flex items-center justify-between cursor-pointer hover:bg-muted/50 rounded-md p-2">
              <div className="font-medium">{doctor.name}</div>
              <Badge variant="outline">Offline</Badge>
            </li>
          ))} */}
        </ul>
      </CardContent>
    </Card>
  );

  const popUpCard = ()=>(
    <Dialog defaultOpen>
      <DialogContent className="bg-[#f0f0f0] bg-opacity-80 backdrop-blur-sm p-12 rounded-2xl w-full max-w-[600px] mx-auto animate-fade-in-up">
        <div className="flex flex-col items-center gap-8">
          <div className="bg-[#4CAF50] rounded-t-2xl w-full py-12 flex justify-center">
            <img
              src="/placeholder.svg"
              alt="Medical Card"
              width={200}
              height={200}
              className="object-contain"
              style={{ aspectRatio: "200/200", objectFit: "cover" }}
            />
          </div>
          <div className="grid gap-4 text-center">
            <h3 className="text-3xl font-bold">{formState.name}</h3>
            <p className="text-xl font-medium">ABHA Card Number: {formState.abhaid}</p>
            <p className="text-muted-foreground text-lg">
              Date of Birth: {formState?.dob ? formState.dob.toDateString():"No Date Selected"}
              <br />
              Gender: {formState.gender}
              <br />
              Address: {formState.address}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )

  const renderNewPatientForm = () => (
    <Card>
      <CardHeader>
        <CardTitle>New Patient</CardTitle>
        <CardDescription>Enter the patient's Abha ID to get their details.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-[auto_1fr] gap-4">
          <Label htmlFor="abha-id">Abha ID</Label>
          <Input id="abha-id" placeholder="Enter Abha ID" value={abhaId} onChange={handleAbhaIdChange} />
        </div>
        <div className="flex flex-col items-center gap-2">
  <Button
    type="submit"
    onClick={() => {
      axios
        .get(`${BACKEND_URL}/api/admin/getpatient`, {
          headers: {
            abhaid: abhaId,
          },
        })
        .then((data) => {
          console.log(data.data.patient);
          setPatientDetails(data.data.patient);
          setActiveView(null);
        })
        .catch((err) => {
          console.log(err);
        });
    }}
  >
    Get Details
  </Button>
  OR
  <Button className="bg-sky-500"
    onClick={() => {
      setActiveView("createABHA");
    }}
  >
    Create ABHA ID
  </Button>
</div>

      </CardContent>
    </Card>
  );

  const createABHA = () =>(
    <Card className="w-full max-w-2xl">
  <CardHeader>
    <CardTitle>Create ABHA ID</CardTitle>
    <CardDescription>
      Enter your personal information to generate your Ayushman Bharat Health Account (ABHA) ID.
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-6">
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formState.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact">Contact</Label>
          <Input
            id="contact"
            type="tel"
            value={formState.contact}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Address</Label>
        <Textarea
          id="address"
          value={formState.address}
          onChange={handleInputChange}
          placeholder="Enter your address"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select  value={formState.gender} onValueChange={handleGenderChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start font-normal">
                {formState.dob ? formState.dob.toDateString() : 'Pick a date'}
                <div className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              //@ts-ignore
              <Calendar mode="single" selected={formState.dob} onSelect={handleDateChange} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="emergency-contact">Emergency Contact Address</Label>
        <Textarea
          id="emergencyContact"
          value={formState.emergencyContact}
          onChange={handleInputChange}
          placeholder="Enter emergency contact address"
        />
      </div>
      <CardFooter>
        <Button type="submit" className="w-full">
          Generate ABHA ID
        </Button>
      </CardFooter>
        </form>
      </CardContent>
    </Card>
  )

  const handleAllocateDoctor = async () => {
    try {
      let doctorsResponse: Doctor[] = [];
      await axios.get(`${BACKEND_URL}/api/doctor/alldoctors`, {
        headers: {
          code: HOSPITAL_CODE,
        }
      }).then((data) => {
        doctorsResponse = data.data.doctors;
        setDoctors(doctorsResponse);
        console.log(doctorsResponse);
      });

      await axios.post("http://localhost:8000/predict/", {
        symptom: reason,
        doctors: doctorsResponse,
      }).then((data) => {
        if (data.data.error != null) {
          alert(data.data.error);
        } else {
          console.log(data.data.doctor);
          // Find the allocated doctor from the response
          const doctor = doctorsResponse.find(doc => doc.id === data.data.doctor);
          setAllocatedDoctor(doctor || null);
          console.log(allocatedDoctor);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleOPDUpdate = async()=>{
      await axios.post(`${BACKEND_URL}/api/hospital/createpatient`,{
          abhaId:patientDetails?.abhaId,
          doctorId : allocatedDoctor?.id,
          queueNumber:allocatedDoctor?._count.opdQueue,
          visitType:"FreshVisit",
          age:patientDetails?.Age,
          gender:patientDetails?.gender,
          reason:reason,
          name:patientDetails?.name
      },
      {
        headers:{
          code: HOSPITAL_CODE,
        }
      }
    ).then((data)=>{
        if(data.data.message!=null){
          alert(data.data.message);
        }
        setAllocatedDoctor(null)
      })
  }
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Dashboard */}
      <div className="flex items-center justify-between bg-gray-100 p-4 border-b">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Link to="/adminsignin"><Button className="ml-auto">Home</Button></Link>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-[280px_1fr] flex-1">
        <div className="flex flex-col border-r bg-muted/40 p-4">
          <div className="flex flex-col gap-4">
            <Button onClick={() => setActiveView("newPatientForm")}>New Patient</Button>
            <Button onClick={() => { setActiveView("activeDoctors"); setPatientDetails(null); }}>Active Doctors</Button>
            <Button onClick={() => { setActiveView("inactiveDoctors"); setPatientDetails(null); }}>Inactive Doctors</Button>
          </div>
        </div>
        <div className="flex flex-col p-6">
          {activeView === "activeDoctors" && renderActiveDoctors()}
          {activeView === "inactiveDoctors" && renderInactiveDoctors()}
          {activeView === "newPatientForm" && renderNewPatientForm()}
          {activeView === "createABHA" && createABHA()}
          {activeView === "popupcard" && popUpCard()}
          {patientDetails && (
            <Card>
              <CardHeader>
                <CardTitle>Patient Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={patientDetails.name} />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" defaultValue={patientDetails.Age} />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Input id="gender" defaultValue={patientDetails.gender} />
                  </div>
                  <div>
                    <Label htmlFor="reason">Reason</Label>
                    <Textarea id="reason" placeholder="Enter reason for visit" value={reason} onChange={handleReasonChange} />
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <Button type="submit" className="align-center" onClick={handleAllocateDoctor}>
                    Allocate Doctor
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Pop-up Card for Allocated Doctor */}
      {allocatedDoctor && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm z-50">
          <Card className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="Doctor Avatar" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <div className="grid gap-1 flex-1">
                <h3 className="text-xl font-semibold">{allocatedDoctor.name}</h3>
                <div className="text-muted-foreground">
                  <span className="font-medium">Department:</span> {allocatedDoctor.department.name}
                </div>
                <div className="text-muted-foreground">
                  <span className="font-medium">Queue Length:</span> {allocatedDoctor._count.opdQueue}
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              
              <Button onClick={() => setAllocatedDoctor(null)}>Close</Button>
              <Button className="bg-blue-500 text-white hover:bg-blue-600" onClick={handleOPDUpdate}>Allocate</Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

