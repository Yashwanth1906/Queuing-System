import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

import axios from "axios";
import { Navbar } from "@/components/component/navbar";
import { BACKEND_URL, HOSPITAL_CODE } from "@/config";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";





import { AlertTriangle, Bed, ClipboardIcon, HomeIcon, HospitalIcon, InfoIcon, UserCheck, UserIcon, UserMinus, UserPlus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Separator } from "@radix-ui/react-dropdown-menu";


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
  email : string,
  password:string
}

interface DoctorforUnallocaetd {
  name: string;
}

interface PatientforUnallocated {
  name: string;
  reason: string;
}

interface WardforUnallocated {
  name: string;
}

interface UnallocatedPatient {
  id:String,
  patientId: string;
  doctor: DoctorforUnallocaetd;
  patient: PatientforUnallocated;
  ward: WardforUnallocated;
}

export function Admindashboard() {
  const [activeView, setActiveView] = useState<"activeDoctors" | "inactiveDoctors" | "newPatientForm" | "createABHA" | "popupcard" | "bedAllocation" | "bedPopUp"| "main" >("main");
  const [patientDetails, setPatientDetails] = useState<PatientDetails | null>(null);
  const [reason, setReason] = useState('');
  const [abhaId, setAbhaId] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<UnallocatedPatient | null>(null);
  const [bedNumber, setBedNumber] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [unallocatedPatients, setUnallocatedPatients] = useState<UnallocatedPatient[]>([]);
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
  
  const fetchBedNumber = async (id: string) => {
    console.log(id)
    try {
      axios.post(`${BACKEND_URL}/api/hospital/allocate`,{
        admissionId:id,
      },{
        headers:{
          code:HOSPITAL_CODE
        }
      }).then((data)=>{
        console.log(data.data)
        setBedNumber(data.data.bed.bedNumber);
        setTimeout(() => setActiveView("bedPopUp"), 2000);
        setTimeout(() => setActiveView("bedAllocation"), 4000);
    }) 
    }catch (error) {
      console.error('Error fetching bed number:', error);
    }
  };

  const handlePatientSelect = (patient: UnallocatedPatient) => {
    setSelectedPatient(patient);
    console.log(selectedPatient)
    fetchBedNumber(patient.id);
  };

  const handleClosePopup = () => {
    setSelectedPatient(null);
    setBedNumber('');
    setActiveView("bedAllocation")
  };

  useEffect(() => {
    if (selectedPatient?.id) {
      //@ts-ignore
      fetchBedNumber(selectedPatient?.id);
    }
  }, [selectedPatient]);

  const bedAllocatedPopUp = () => {
    if (!selectedPatient || !bedNumber) return null;
    console.log(selectedPatient)
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
        <Card className="w-full max-w-sm p-6 grid gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="border w-12 h-12">
              <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <h3 className="font-semibold">{selectedPatient?.patinet.name}</h3>
              <p className="text-muted-foreground text-sm">ABHA ID: {selectedPatient?.patientId}</p>
            </div>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Doctor:</span>
              <span>{selectedPatient?.doctor.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Ward:</span>
              <span>{selectedPatient?.ward.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Bed:</span>
              <span>{bedNumber}</span>
            </div>
          </div>
        </Card>
      </div>
    );
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


  const renderBedAllocation = () =>(
    <div className="space-y-6">
      {unallocatedPatients.map((patient, index) => (
  <Card className="w-full max-w-3xl" key={index}>
    <CardContent className="grid grid-cols-[1fr_1fr_1fr] gap-4 p-4">
      <div className="space-y-1.5">
        <Label htmlFor="patient-name">Patient Name</Label>
        <div className="flex items-center">
          <Avatar className="mr-2">
            <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
            <AvatarFallback>{patient?.patinet?.name ? patient.patinet.name[0] : 'N/A'}</AvatarFallback>
          </Avatar>
          <span>{patient?.patinet?.name || 'Unknown'}</span>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="abha-id">Abha ID</Label>
        <div>{patient?.patientId || 'N/A'}</div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="doctor-name">Doctor Name</Label>
        <div className="flex items-center">
          <Avatar className="mr-2">
            <AvatarImage src="/placeholder-user.jpg" alt="Doctor" />
            <AvatarFallback>{patient?.doctor?.name ? patient.doctor.name[0] : 'N/A'}</AvatarFallback>
          </Avatar>
          <span>{patient?.doctor?.name || 'Unknown'}</span>
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="reason">Reason</Label>
        <div>{patient?.patinet?.reason || 'No reason provided'}</div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="ward-name">Ward Name</Label>
        <div>{patient?.ward?.name || 'No ward assigned'}</div>
      </div>
      <div className="flex items-end justify-end">
        <Button size="lg" onClick={() => handlePatientSelect(patient)} >Allocate Bed</Button>
      </div>
    </CardContent>
  </Card>
))}

    </div>
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
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={formState.email}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact">Password</Label>
          <Input
            id="password"
            type="tel"
            value={formState.password}
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
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full p-2 border rounded outline-none"
              value={formState.dob ? formState.dob.toISOString().substring(0, 10) : ''} // Format date to YYYY-MM-DD for the input
              onChange={(e) => handleDateChange(new Date(e.target.value))}
            />
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

  const getBedAllocationRequests = async()=>{
    await axios.get(`${BACKEND_URL}/api/hospital/getunallocated`,{
      headers:{
        code:HOSPITAL_CODE
      }
    }).then((data)=>{
        console.log(data.data.patients)
        setUnallocatedPatients(data.data.patients);
        setTimeout(() => setActiveView("bedAllocation"), 0);
        setTimeout(()=>console.log(unallocatedPatients),0);
    })
  }


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
        setAllocatedDoctor(null);
        setActiveView(null);
      })
  }

  const renderMain = ()=>(
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                  <UserPlus className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,259</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Available Beds</CardTitle>
                  <Bed className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">45</div>
                  <p className="text-xs text-muted-foreground">-3 from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Doctors</CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">+2 new this week</p>
                </CardContent>
              </Card>
            </div>
  )
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 px-6 bg-blue-600 dark:bg-blue-800">
          <h1 className="text-xl font-semibold text-white">Admin Dashboard</h1>
        </div>
        <nav className="mt-6">
          <Button variant="ghost" className="w-full justify-start mb-2" onClick={() => setActiveView("newPatientForm")}>
            <UserPlus className="mr-2 h-4 w-4" />
            New Patient
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2" onClick={() => {setActiveView("bedAllocation")}}>
            <Bed className="mr-2 h-4 w-4" />
            Bed Allocation Request
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2" onClick={() => {setActiveView("activeDoctors")}}>
            <UserCheck className="mr-2 h-4 w-4" />
            Active Doctors
          </Button>
          <Button variant="ghost" className="w-full justify-start mb-2" onClick={() => {setActiveView("inactiveDoctors")}}>
            <UserMinus className="mr-2 h-4 w-4" />
            Inactive Doctors
          </Button>
        </nav>
      </aside>
      <div className="flex flex-col p-6">
        {activeView === "activeDoctors" && renderActiveDoctors()}
        {activeView === "inactiveDoctors" && renderInactiveDoctors()}
        {activeView === "newPatientForm" && renderNewPatientForm()}
        {activeView === "createABHA" && createABHA()}
        {activeView === "popupcard" && popUpCard()}
        {activeView === "bedAllocation" && renderBedAllocation()}
        {activeView === "bedPopUp" && bedAllocatedPopUp()}
        {activeView === "main" && renderMain()}
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