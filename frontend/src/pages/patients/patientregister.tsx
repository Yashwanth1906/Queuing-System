import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import axios from 'axios'
import { Label } from '@/components/ui/label'
import { BACKEND_URL } from '@/config'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent } from '@/components/ui/dialog'

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


export function PatientRegister() {
  const navigate = useNavigate();
  const [activeView,setActiveView] = useState<"popUp" | null>(null);
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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try{
        axios.post(`${BACKEND_URL}/api/admin/createpatient`,{
            name:formState.name,
            contact:formState.contact,
            emergencyContact:formState.emergencyContact,
            address:formState.address,
            gender:formState.gender,
            dob:formState.dob,
            email:formState.email,
            password:formState.password,
        }).then((data)=>{
          console.log(data.data.abhaid);
          formState.abhaid = data.data.abhaid,
            setActiveView("popUp");
            setTimeout(() => {
              navigate('/patientlogin');
            }, 4000);
        })
    }catch(err){
        console.log(err);
    }
  }

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

  return (
    <div>
    <div className="flex items-center w-screen absolute top-0 left-0 right-0 justify-center h-screen bg-gray-100">
      <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800">Create ABHA ID</CardTitle>
        <CardDescription className="text-gray-600">
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
            <Label htmlFor="emergencyContact" className="text-gray-700">Emergency Contact</Label>
            <Textarea
              id="emergencyContact"
              value={formState.emergencyContact}
              onChange={handleInputChange}
              placeholder="Enter emergency contact"
              className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
          <Button type="submit" onClick={handleSubmit} className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white">
            Generate ABHA ID
          </Button>
        </form>
      </CardContent>
    </Card>
    </div>
    <main className="flex-1 overflow-auto bg-gray-50 p-8">
          <div className="max-w-4xl mx-auto">
            {activeView === "popUp" && popUpCard()}
          </div>
    </main>
    </div>
  )
}
