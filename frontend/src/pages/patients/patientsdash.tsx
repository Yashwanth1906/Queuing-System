import { useEffect, useState } from 'react'
import { Bell, Search, Settings, UserCircle, Calendar, XCircle, History, Clock } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import axios from 'axios'
import { BACKEND_URL, HOSPITAL_CODE } from '@/config'

type TimeSlot = {
  time: string;
  expectedMembers: number;
  expectedWaitTime: number;
};

interface PatientDetails {
  abhaId :string;
  name: string;
  Age: string;
  gender: string;
  reason: string;
}
type Hospital = {
  code: string;
  name: string;
};

type Appointment = {
  id: number;
  date: string;
  time: string;
  reason: string;
  hospital:{name:string,code:string};
  status: 'Upcoming' | 'Completed' | 'Cancelled';
};

const getBarColor = (expectedMembers: number) => {
  if (expectedMembers < 50) return 'bg-green-500';
  if (expectedMembers < 100) return 'bg-yellow-500';
  return 'bg-red-500';
};

const timeSlots: TimeSlot[] = [
  { time: '09:00 AM', expectedMembers: 30, expectedWaitTime: 15 },
  { time: '10:00 AM', expectedMembers: 60, expectedWaitTime: 30 },
  { time: '11:00 AM', expectedMembers: 90, expectedWaitTime: 45 },
  { time: '12:00 PM', expectedMembers: 120, expectedWaitTime: 60 },
];

// const appointments: Appointment[] = [
//   { id: 1, date: '2023-06-15', time: '10:00 AM', doctor: 'Dr. Smith', status: 'Upcoming' },
//   { id: 2, date: '2023-06-20', time: '02:00 PM', doctor: 'Dr. Johnson', status: 'Upcoming' },
//   { id: 3, date: '2023-06-10', time: '11:00 AM', doctor: 'Dr. Brown', status: 'Completed' },
// ];

export function PatientDashboard() {
  const [activeTab, setActiveTab] = useState<"newappointment" | "cancelappointment" | "appointmenthistory" | "appointmentstatus" | null>(null);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [selectedHospital, setSelectedHospital] = useState<Hospital | undefined>(undefined);
  const [reason,setReason] = useState("");
  const [appointments,setAppointments] = useState<Appointment[]>([])
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [patientDetails, setPatientDetails] = useState<PatientDetails | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [showQR, setShowQR] = useState(false)
  const [queueNumber, setQueueNumber] = useState<number | null>(null)

  useEffect(()=>{
    axios.get(`${BACKEND_URL}/api/patient/getdetails`,{
      headers:{
        Authorization:localStorage.getItem("patientToken")
      }
    }).then((data)=>{
      setPatientDetails(data.data.patient);
    })

    axios.get(`${BACKEND_URL}/api/hospital/gethoscodes`).then((data)=>{
        setHospitals(data.data.hosCodes);
        console.log(hospitals)
        })
  },[])
  const handleConfirm = () => {
    console.log("hi")
    console.log(reason);
    console.log(selectedHospital?.code);
    console.log(patientDetails);
    console.log(selectedDate);
    console.log(selectedSlot?.time);
    axios.post(`${BACKEND_URL}/api/patient/intimation`,{
      code:selectedHospital?.code,
      reason:reason,
      name:patientDetails?.name,
      gender:patientDetails?.gender,
      age: patientDetails?.Age + "",
      date: selectedDate,
      time: selectedSlot?.time,
      abhaId : patientDetails?.abhaId
    },{
      headers:{
        code:HOSPITAL_CODE
      }
    }).then((data)=>{
      console.log(data.data);
      alert(data.data.message)
    }).catch((err)=>{
      alert(err)
    })
    setIsOpen(false);
    setShowQR(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const handleSelectHospital = (code: string) => {
    const hospital = hospitals.find((h) => h.code === code);
    setSelectedHospital(hospital); // Save the selected hospital (both name and code) to state
  };

  const handleNewAppointment = () => {
    // Simulating queue number assignment
    setQueueNumber(Math.floor(Math.random() * 100) + 1);
    setShowQR(true);
  };
  const getAppointmentCancelation = () =>{
    axios.get(`${BACKEND_URL}/api/patient/appointments`,{
      headers:{
        Authorization:localStorage.getItem("patientToken")
      }
    }).then((data)=>{
      console.log(data.data)
      data.data.appointments.map((i)=>{
        i.status = "Upcoming"
      })
      setAppointments(data.data.appointments);
      setActiveTab("cancelappointment");
    }).catch((err)=>{
      console.log(err);
    })
  }
  const getAppointmentHistory = () =>{
    setActiveTab("appointmenthistory")
    console.log("History")
  } 
  const getAppointmentStatus = () =>{
    setActiveTab("appointmentstatus")
    console.log("Status")
  }
  const unnecessary = () =>{
    setActiveTab("newappointment")
    console.log("New Appointments")
  }
  return (
    <div className="flex h-screen w-screen absolute top-0 left-0 bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-purple-600">Patient Dashboard</h2>
        </div>
        <nav className="mt-6">
          {[
            { name: 'New Appointment', icon: Calendar,callback: unnecessary},
            { name: 'Appointment Cancellation', icon: XCircle, callback: getAppointmentCancelation},
            { name: 'Appointment History', icon: History,callback: getAppointmentHistory},
            { name: 'Appointment Status', icon: Clock ,callback: getAppointmentStatus},
          ].map((item) => (
            <Button
              key={item.name}
              variant={activeTab === item.name.toLowerCase().replace(' ', '') ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={()=>{
                item?.callback()
              }}
              >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
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
          {activeTab === 'newappointment' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">New Appointment</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="abhID" >ABH ID</Label>
                  <Input id="abhID" value={patientDetails?.abhaId} placeholder="Enter ABH ID" />
                </div>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter name" value={patientDetails?.name} />
                </div>
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="Enter age" value={patientDetails?.Age} />
                </div>
                <div>
                  <Label htmlFor="symptom">Symptom</Label>
                  <Input id="reason" type="string" placeholder="Enter the symptom" value={reason} onChange={(e)=>{setReason(e.target.value)}} />
                </div>
                <div>
                  <Label htmlFor="gender" >Gender</Label>
                  <Input id="abhID" value={patientDetails?.gender} placeholder="Enter ABH ID" />
                </div>
                <div>
                    <Label htmlFor="hospital">Hospital</Label>
                    <Select onValueChange={handleSelectHospital}>
                      <SelectTrigger id="hospital">
                        <SelectValue placeholder="Select hospital" />
                      </SelectTrigger>
                      <SelectContent>
                        {hospitals?.map((hospital) => (
                          <SelectItem key={hospital.code} value={hospital.code}>
                            {hospital.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                </div>
                <div>
                  <Label>Date</Label><br />
                  <input 
                      type="date" 
                      id="date" 
                      value={selectedDate} 
                      onChange={(e) => setSelectedDate(e.target.value)} 
                      className="p-2 border rounded-md" width={20}
                    />
                </div>
              </div>
              {selectedDate && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {timeSlots.map((slot) => (
                    <Card key={slot.time} className="cursor-pointer">
                      <CardContent className="p-4">
                        <p className="font-semibold">{slot.time}</p>
                        <div className="w-full h-8 bg-gray-200 mt-2 relative">
                          <div 
                            className={`h-full ${getBarColor(slot.expectedMembers)}`} 
                            style={{ width: `${(slot.expectedMembers / 200) * 100}%` }}
                          ></div>
                          <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
                            {slot.expectedWaitTime} min wait
                          </div>
                        </div>
                        <p className="mt-2">Expected: {slot.expectedMembers} patients</p>
                        <p className="text-sm text-muted-foreground">Wait time: {slot.expectedWaitTime} minutes</p>
                        <Button 
                          className="w-full mt-2" 
                          onClick={() => { setSelectedSlot(slot); setIsOpen(true); }}
                        >
                          Select
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              {isOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                    <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
                    <p className="mb-6">Do you really want to book this? This process cannot be undone.</p>
                    <div className="flex justify-end gap-4">
                      <button
                        onClick={handleCancel}
                        className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleConfirm}
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {showQR && selectedSlot && (
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-2">Appointment Confirmation</h2>
                  <p>You've booked an appointment at {selectedSlot.time} on {selectedDate}.</p>
                  <p>Your queue number is {queueNumber}.</p>
                  <div className="mt-4">
                    {/* <QRCode value={`ABH ID: 12345, Time: ${selectedSlot.time}, Date: ${selectedDate}, Queue Number: ${queueNumber}`} /> */}
                  </div>
                </div>
              )}
            </div>
          )}
          {activeTab === "cancelappointment" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Appointment Cancellation</h2>
              {appointments.filter(app => app.status === 'Upcoming').map(appointment => (
                <Card key={appointment.id} className="mb-4">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold">{appointment.date} at {appointment.time}</p>
                        <p>{appointment.hospital.name}</p>
                      </div>
                      <Button variant="destructive">Cancel</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {activeTab === "appointmenthistory" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Appointment History</h2>
              {appointments.map(appointment => (
                <Card key={appointment.id} className="mb-4">
                  <CardContent className="p-4">
                    <p className="font-semibold">{appointment.date} at {appointment.time}</p>
                    <p>{appointment.doctor}</p>
                    <p>Status: {appointment.status}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {activeTab === 'appointmentstatus' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Appointment Status</h2>
              {queueNumber ? (
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Your Queue Number</h3>
                    <p className="text-4xl font-bold text-center py-4">{queueNumber}</p>
                    <p className="text-center">Please wait for your number to be called.</p>
                  </CardContent>
                </Card>
              ) : (
                <p>No active appointment. Please create a new appointment to get a queue number.</p>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
