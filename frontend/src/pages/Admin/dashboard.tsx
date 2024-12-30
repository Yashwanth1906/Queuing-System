import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { UserPlus, BedDouble, UserCheck, Activity, BarChart, Bell, Search, Settings, Calendar } from 'lucide-react'
import { BACKEND_URL, HOSPITAL_CODE,DJANGO_URL } from '@/config'
import axios from 'axios'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { AnalyticsDashboard } from '@/components/component/analytics'
import { DoctorPredCard } from '@/components/DoctorPredCard'


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
  id:string,
  patientId: string;
  doctor: DoctorforUnallocaetd;
  patinet: PatientforUnallocated;
  ward: WardforUnallocated;
}

type Appointment = {
  id: number;
  abhaId:string;
  name:string;
  gender:string;
  age:string
  date: string;
  time: string;
  reason: string;

};


export function AdminDashboard() {
  const [activeView, setActiveView] = useState<"activeDoctors" | "inactiveDoctors" | "newPatientForm" | "createABHA" | "popupcard" | "bedAllocation" | "bedPopUp"|"patientCheckin" | "analysis" |"main" | "getPatient" | "analytics" | "tmrwdocprediction">("newPatientForm");
  const [reload,setReload] = useState<boolean>(false);
  const [patientDetails, setPatientDetails] = useState<PatientDetails | null>(null);
  const [reason, setReason] = useState('');
  const [appointments,setAppointments] = useState<Appointment[]>([])
  const [abhaId, setAbhaId] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<UnallocatedPatient | null>(null);
  const [bedNumber, setBedNumber] = useState<string>('');
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [unallocatedPatients,setUnallocatedPatients] = useState<UnallocatedPatient[]>([]);
  const [, setDoctors] = useState<Doctor[]>([]);
  const [allocatedDoctor, setAllocatedDoctor] = useState<Doctor | null>(null);
  const [selectedCheckIn,setSelectedCheckIn] = useState(null);
  const [allocatedDoctorForCheckIn, setAllocatedDoctorForCheckIn] = useState<Doctor | null>(null);
  const [formState, setFormState] = useState<FormState>({
    name: '',
    contact: '',
    address: '',
    gender: '',
    dob: undefined,
    emergencyContact: '',
    abhaid:undefined,
    email:"",
    password:""
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [onlineDoctors,setOnlineDoctors]=useState();
  const [loading,setLoading]=useState<boolean>(true);

  useEffect(()=>{
	async function fn()
	{
		try{
			const res=await axios.post(`${BACKEND_URL}/api/hospital/getonlinedoctors`,{
			hosCode:'0001'
		},{headers:{
			code:'0001'
		}});


		setOnlineDoctors(res.data.docs);
		console.log(res.data.docs);
		setLoading(false);
		}
		catch{
			alert("error");
		}
		
	}
	fn();



  },[])

  const handleReasonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReason(e.target.value);
  };

  const handleAbhaIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAbhaId(e.target.value);
  };
  
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


  useEffect(() => {
    if (selectedPatient?.id) {
      fetchBedNumber(selectedPatient?.id);
      setLoading(false);
    }
  }, [selectedPatient,reload]);

  if(loading)
  {
	  return(
		  <div>
		  Loading..
		  </div>
	  )
  }

  const  handleOPDUpdateForCheckIn = async() =>{
    const find = appointments.find((item) => item.id === selectedCheckIn);
    await axios.post(`${BACKEND_URL}/api/hospital/createpatient`,{
      abhaId:find?.abhaId,
      doctorId : allocatedDoctorForCheckIn?.id,
      queueNumber:allocatedDoctorForCheckIn?._count.opdQueue,
      visitType:"FreshVisit",
      age:find?.age,
      gender:find?.gender,
      reason:find?.reason,
      name:find?.name
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
    setAllocatedDoctorForCheckIn(null);
    setActiveView("main");
  })
  }

  const handleCheckIn = async(patientId:any) => {
    const find = appointments.find((item) => item.id === patientId)
    setSelectedCheckIn(patientId);
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
      console.log("Doctor Response : "+doctorsResponse);
      await axios.post(`${DJANGO_URL}/predict/`, {
        symptom: find?.reason,
        doctors: doctorsResponse,
        initimated : true
      }).then((data) => {
        if (data.data.error != null) {
          alert(data.data.error);
        } else {
          console.log(data.data.doctor);
          const doctor = doctorsResponse.find(doc => doc.id === data.data.doctor);
          console.log(doctor)
          setAllocatedDoctor(doctor || null);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  const handleCancel = (patientId:any) => {
    // Handle cancellation of patient check-in
    console.log(`Cancelling check-in for patient with ID: ${patientId}`)
  }

  const handleSearch = (e:any) => {
    setSearchQuery(e.target.value)
  }

  // const filteredPatients = patientCheckIns.filter(patient =>
  //   patient.abhaId.toLowerCase().includes(searchQuery.toLowerCase())
  // )
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
              <h3 className="font-semibold">{selectedPatient.id}</h3>
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

  const renderNewPatientForm = () => (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-gradient-to-br from-[#CFFFDC] to-[#68BA7F] shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-[#253D2C]">New Patient</CardTitle>
          <CardDescription className="text-[#2E6F40]">Enter the patient's Abha ID to get their details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
            <Label htmlFor="abha-id" className="text-[#253D2C]">Abha ID</Label>
            <Input
              id="abha-id"
              placeholder="Enter Abha ID"
              value={abhaId}
              onChange={handleAbhaIdChange}
              className="border-[#68BA7F] focus:border-[#2E6F40] focus:ring-[#2E6F40]"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button type="submit" onClick={() => {
              axios
              .get(`${BACKEND_URL}/api/admin/getpatient`, {
                headers: {
                  abhaid: abhaId,
                },
              })
              .then((data) => {
                console.log(data.data.patient);
                setPatientDetails(data.data.patient);
                setActiveView("getPatient");
              })
              .catch((err) => {
                console.log(err);
              });
            }} className="bg-[#2E6F40] hover:bg-[#253D2C] text-[#CFFFDC]">
              Get Details
            </Button>
            <span className="text-[#2E6F40] font-medium">OR</span>
            <Button className="bg-[#68BA7F] hover:bg-[#2E6F40] text-[#CFFFDC]" onClick={() => setActiveView("createABHA")}>
              Create ABHA ID
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const createABHA = () => (
    <Card className="w-full max-w-2xl mx-auto bg-[#CFFFDC] shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-[#253D2C]">Create ABHA ID</CardTitle>
        <CardDescription className="text-[#2E6F40]">
          Enter your personal information to generate your Ayushman Bharat Health Account (ABHA) ID.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">Name</Label>
              <Input
                id="name"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact" className="text-gray-700">Contact</Label>
              <Input
                id="contact"
                type="tel"
                value={formState.contact}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Password</Label>
              <Input
                id="password"
                type="password"
                value={formState.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <Label htmlFor="address" className="text-gray-700">Address</Label>
            <Textarea
              id="address"
              value={formState.address}
              onChange={handleInputChange}
              placeholder="Enter your address"
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="space-y-2">
              <Label htmlFor="gender" className="text-gray-700">Gender</Label>
              <Select value={formState.gender} onValueChange={handleGenderChange}>
                <SelectTrigger className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
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
              <Label htmlFor="dob" className="text-gray-700">Date of Birth</Label>
              <Input
                type="date"
                id="dob"
                name="dob"
                className="w-full p-2 border rounded outline-none border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                value={formState.dob ? formState.dob.toISOString().substring(0, 10) : ''}
                onChange={(e) => handleDateChange(new Date(e.target.value))}
              />
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <Label htmlFor="emergencyContact" className="text-gray-700">Emergency Contact Address</Label>
            <Textarea
              id="emergencyContact"
              value={formState.emergencyContact}
              onChange={handleInputChange}
              placeholder="Enter emergency contact address"
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <Button type="submit" className="w-full mt-6 bg-[#2E6F40] hover:bg-[#253D2C] text-[#CFFFDC]">
            Generate ABHA ID
          </Button>
        </form>
      </CardContent>
    </Card>
  )

  const renderBedAllocation = () => (
    <div className="space-y-6 max-w-3xl mx-auto">
      {unallocatedPatients.map((patient, index) => (
        <Card className="w-full bg-[#CFFFDC] shadow-md" key={index}>
          <CardContent className="grid grid-cols-[1fr_1fr_1fr] gap-4 p-4">
            <div className="space-y-1.5">
              <Label htmlFor="patient-name" className="text-gray-600">Patient Name</Label>
              <div className="flex items-center">
                <Avatar className="mr-2">
                  <AvatarImage src="/placeholder-user.jpg" alt="Patient" />
                  <AvatarFallback>{patient?.patinet?.name ? patient.patinet.name : 'N/A'}</AvatarFallback>
                </Avatar>
                <span className="text-gray-800">{patient?.patinet?.name || 'Unknown'}</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="abha-id" className="text-gray-600">Abha ID</Label>
              <div className="text-gray-800">{patient?.patientId || 'N/A'}</div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="doctor-name" className="text-gray-600">Doctor Name</Label>
              <div className="flex items-center">
                <Avatar className="mr-2">
                  <AvatarImage src="/placeholder-user.jpg" alt="Doctor" />
                  <AvatarFallback>{patient?.doctor?.name ? patient.doctor.name : 'N/A'}</AvatarFallback>
                </Avatar>
                <span className="text-gray-800">{patient?.doctor?.name || 'Unknown'}</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="reason" className="text-gray-600">Reason</Label>
              <div className="text-gray-800">{patient?.patinet?.reason || 'No reason provided'}</div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="ward-name" className="text-gray-600">Ward Name</Label>
              <div className="text-gray-800">{patient?.ward?.name || 'No ward assigned'}</div>
            </div>
            <div className="flex items-end justify-end">
              <Button size="lg" onClick={() => handlePatientSelect(patient)} className="bg-[#2E6F40] hover:bg-[#253D2C] text-[#CFFFDC]">
                Allocate Bed
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderActiveDoctors = (docs) => {
	console.log(docs)
    return <Card className="max-w-md mx-auto bg-white shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800">Active Doctors</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
	{docs.map((doc)=>{
		 console.log(doc)
		return <li className="flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-md p-2">
            <div className="font-medium text-gray-700">{doc.name}</div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">Online</Badge>
          </li>

	})}
        
        </ul>
      </CardContent>
    </Card>
}

  const renderInactiveDoctors = () => (
    <Card className="max-w-md mx-auto bg-white shadow-md mt-6">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800">Inactive Doctors</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {/* Placeholder for inactive doctors list */}
          <li className="flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-md p-2">
            <div className="font-medium text-gray-700">Dr. Alice Johnson</div>
            <Badge variant="outline" className="text-gray-600">Offline</Badge>
          </li>
          <li className="flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded-md p-2">
            <div className="font-medium text-gray-700">Dr. Bob Williams</div>
            <Badge variant="outline" className="text-gray-600">Offline</Badge>
          </li>
        </ul>
      </CardContent>
    </Card>
  )

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
  const renderPatientCheckIn = () => (
    <div className="space-y-6">
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search by ABHA ID"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full max-w-md border-[#68BA7F] focus:border-[#2E6F40] focus:ring-[#2E6F40]"
        />
      </div>
      {appointments.map((item) => (
        <Card key={item.id} className="w-full bg-[#CFFFDC] shadow-sm">
          <CardContent className="p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="grid grid-cols-2 gap-4 flex-grow">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Name</Label>
                  <div className="text-lg font-semibold text-gray-900">{item.name}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">ABHA ID</Label>
                  <div className="text-lg font-semibold text-gray-900">{item.abhaId}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Symptom</Label>
                  <div className="text-lg font-semibold text-gray-900">{item.reason}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Time Slot</Label>
                  <div className="text-lg font-semibold text-gray-900">{item.time}</div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Date</Label>
                  <div className="text-lg font-semibold text-gray-900">{item.date}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button onClick={() => handleCheckIn(item.id)} className="bg-[#2E6F40] hover:bg-[#253D2C] text-[#CFFFDC]">
                  Check In
                </Button>
                <Button onClick={() => handleCancel(item.id)} variant="outline" className="border-[#2E6F40] text-[#2E6F40] hover:bg-[#68BA7F]">
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
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
      console.log("Before check:"+doctorsResponse);
      await axios.post("http://localhost:8000/predict/", {
        symptom: reason,
        doctors: doctorsResponse,
      }).then((data) => {
        if (data.data.error != null) {
          alert(data.data.error);
        } else {
          console.log(data.data);
          doctorsResponse.map(doc => console.log(doc))
          const doctor = doctorsResponse.find(doc => doc.id === data.data.doctor);
          console.log(doctor);
          setAllocatedDoctor(doctor || null);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
  const renderPatientDetails = () =>(
    <Card className="bg-[#CFFFDC]">
            <CardHeader>
              <CardTitle className="text-[#253D2C]">Patient Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue={patientDetails?.name} />
                </div>
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" defaultValue={patientDetails?.Age} />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Input id="gender" defaultValue={patientDetails?.gender} />
                </div>
                <div>
                  <Label htmlFor="reason">Reason</Label>
                  <Textarea id="reason" placeholder="Enter reason for visit" value={reason} onChange={handleReasonChange} />
                </div>
              </div>
              <div className="flex justify-center gap-2">
                <Button type="submit" className="align-center bg-[#2E6F40] hover:bg-[#253D2C] text-[#CFFFDC]" onClick={handleAllocateDoctor}>
                  Allocate Doctor
                </Button>
              </div>
            </CardContent>
          </Card>
  )

  const getBedAllocationRequests = async()=>{
    await axios.get(`${BACKEND_URL}/api/hospital/getunallocated`,{
      headers:{
        code:HOSPITAL_CODE
      }
    }).then((data)=>{
        console.log(data.data.patients)
        setUnallocatedPatients(data.data.patients);
        setTimeout(() => setActiveView("bedAllocation"), 0);
        setTimeout(()=>console.log("Unallocated patients :"+unallocatedPatients),0);
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
      name:patientDetails?.name,
      intimated:false,
      
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
    setActiveView("main");
  })
  }


  const getAllAdmissions = async()=>{
    await axios.get(`${BACKEND_URL}/api/hospital/getcheckins`,{
      headers:{
        code:HOSPITAL_CODE
      }
    }).then((data)=>{
      console.log(data.data.checkins)
      setAppointments(data.data.checkins)
    })
  }
  return (
    <div className="flex w-screen absolute top-0 left-0 flex-col h-screen bg-gray-100 ">
      {/* Top Bar */}
      <header className="bg-white shadow-sm">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
              <span className="text-2xl font-bold text-[#253D2C] ">Admin Dashboard</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="sm">
                <Search className="h-5 w-5 text-gray-500" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-5 w-5 text-gray-500" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" alt="Admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <nav className="mt-5 px-2">
            <Button
              variant="ghost"
              className="w-full justify-start mb-1 text-left font-normal"
              onClick={() => setActiveView('newPatientForm')}
            >
              <UserPlus className="mr-2 h-4 w-4" />
              New Patient
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start mb-1 text-left font-normal"
              onClick={() =>{
                getBedAllocationRequests();
                setActiveView('bedAllocation')}}
            >
              <BedDouble className="mr-2 h-4 w-4" />
              Bed Allocation
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start mb-1 text-left font-normal"
              onClick={() =>{
                getAllAdmissions();
                setActiveView('patientCheckin')
              }}
            >
              <UserCheck className="mr-2 h-4 w-4" />
              Patient Checkin
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start mb-1 text-left font-normal"
              onClick={() => setActiveView('activeDoctors')}
            >
              <Activity className="mr-2 h-4 w-4" />
              Active Doctors
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start mb-1 text-left font-normal"
              onClick={() => setActiveView('analysis')}
            >
              <BarChart className="mr-2 h-4 w-4" />
              Analysis
            </Button>
            <Button
            variant="ghost"
            className="w-full justify-start mb-1 text-left font-normal"
            onClick={() => setActiveView("tmrwdocprediction")}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Doctor Availability
          </Button>
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-50 p-8">
          <div className="max-w-4xl mx-auto">
          {activeView === "activeDoctors" && renderActiveDoctors(onlineDoctors)}
          {activeView === "inactiveDoctors" && renderInactiveDoctors()}
          {activeView === "newPatientForm" && renderNewPatientForm()}
          {activeView === "createABHA" && createABHA()}
          {activeView === "popupcard" && popUpCard()}
          {activeView === "bedAllocation" && renderBedAllocation()}
          {activeView === "bedPopUp" && bedAllocatedPopUp()}
          {activeView === "patientCheckin" && renderPatientCheckIn()}
          {activeView === "getPatient" && renderPatientDetails()}
          {activeView === "analysis" && <AnalyticsDashboard/>}
          {activeView==='tmrwdocprediction' && <DoctorPredCard />}
          {allocatedDoctor && (
            <div className="fixed inset-0 flex items-center justify-center bg-[#CFFFDC] bg-opacity-80 backdrop-blur-sm z-50">
              <Card className="w-full max-w-md p-6 bg-[#CFFFDC] rounded-lg shadow-lg">
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
                  <Button onClick={() => setAllocatedDoctor(null)} className="bg-[#68BA7F] hover:bg-[#2E6F40] text-[#CFFFDC]">Close</Button>
                  <Button className="bg-[#2E6F40] text-[#CFFFDC] hover:bg-[#253D2C]" onClick={handleOPDUpdate}>Allocate</Button>
                </div>
              </Card>
            </div>
          )}
          {allocatedDoctorForCheckIn && (
            <div className="fixed inset-0 flex items-center justify-center bg-[#CFFFDC] bg-opacity-80 backdrop-blur-sm z-50">
              <Card className="w-full max-w-md p-6 bg-[#CFFFDC] rounded-lg shadow-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Doctor Avatar" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1 flex-1">
                    <h3 className="text-xl font-semibold">{allocatedDoctorForCheckIn.name}</h3>
                    <div className="text-muted-foreground">
                      <span className="font-medium">Department:</span> {allocatedDoctorForCheckIn.department.name}
                    </div>
                    <div className="text-muted-foreground">
                      <span className="font-medium">Queue Length:</span> {allocatedDoctorForCheckIn._count.opdQueue}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <Button onClick={() => setAllocatedDoctorForCheckIn(null)} className="bg-[#68BA7F] hover:bg-[#2E6F40] text-[#CFFFDC]">Close</Button>
                  <Button className="bg-[#2E6F40] text-[#CFFFDC] hover:bg-[#253D2C]" onClick={handleOPDUpdateForCheckIn}>Allocate</Button>
                </div>
              </Card>
            </div>
          )}
          </div>
        </main>
      </div>
    </div>
  )
}

