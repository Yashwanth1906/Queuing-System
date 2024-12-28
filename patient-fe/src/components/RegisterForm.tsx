
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {BACKEND_URL} from"../../config";

export function RegisterForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('female')
  const [dob, setDob] = useState('')
  const [emergencyContact, setEmergencyContact] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate=useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try{
	    const res=await axios.post(`${BACKEND_URL}/api/admin/createpatient`,{
		    email,password,name,contact,address,gender,dob,emergencyContact,
	    });
	    localStorage.setItem("patienttoken",res.data.token);
	    alert("done")
	    //navigate("/home");
	    setIsSubmitting(false)


    }
    catch{
	    alert("error")
    }
    

    
    
  }

  const formFields = [
    { name: 'email', label: 'Email', type: 'email', value: email, onChange: setEmail },
    { name: 'password', label: 'Password', type: 'password', value: password, onChange: setPassword },
    { name: 'name', label: 'Name', type: 'text', value: name, onChange: setName },
    { name: 'contact', label: 'Contact', type: 'tel', value: contact, onChange: setContact },
    { name: 'address', label: 'Address', type: 'text', value: address, onChange: setAddress },
    { name: 'dob', label: 'Date of Birth', type: 'date', value: dob, onChange: setDob },
    { name: 'emergencyContact', label: 'Emergency Contact', type: 'tel', value: emergencyContact, onChange: setEmergencyContact },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {formFields.map((field, index) => (
        <motion.div
          key={field.name}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
        >
          <Label htmlFor={field.name}>{field.label}</Label>
          <Input
            id={field.name}
            type={field.type}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            required
            className=" text-[#253D2C]"
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Label>Gender</Label>
        <RadioGroup value={gender} onValueChange={setGender} className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other">Other</Label>
          </div>
        </RadioGroup>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Button type="submit" onClick={onSubmit} disabled={isSubmitting} className="w-full bg-[#68BA7F] hover:bg-[#2E6F40] text-[#253D2C]">
          {isSubmitting ? 'Registering...' : 'Register'}
        </Button>
      </motion.div>
            <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="text-center mt-4"
      >
        <Link to="/login" className="text-[#2E6F40] hover:underline">
          Already have an account? Login
        </Link>
      </motion.div>

    </motion.div>
  )
}


