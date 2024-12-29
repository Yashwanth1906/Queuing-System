
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {Link, useNavigate} from 'react-router-dom'
import { BACKEND_URL } from '../../config'
import axios from 'axios'

export function LoginForm() {
  const [abhaId,setAbhaId]=useState<number | null>();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate=useNavigate();
 
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try{
	    const res=await axios.post(`${BACKEND_URL}/api/patient/login`,{
		email,password,abhaId
	    })
	    console.log(res);
     
	    localStorage.setItem("patienttoken",res.data.token);

	   navigate("/home") 
	    setIsSubmitting(false)
    }    
    catch(error){
      console.log(error)
	    alert("error")
    }
   
  }

  const formFields = [
    {name:"AbhaId",label:"AbhaId",type:"text",value:abhaId,onChange:setAbhaId},
    { name: 'email', label: 'Email', type: 'email', value: email, onChange: setEmail },
    { name: 'password', label: 'Password', type: 'password', value: password, onChange: setPassword },
  ]

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={onSubmit}
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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button type="submit" disabled={isSubmitting} className="w-full bg-[#68BA7F] hover:bg-[#2E6F40] text-[#253D2C]">
          {isSubmitting ? 'Logging in...' : 'Login'}
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center"
      >
        <Link to="/register" className="text-[#2E6F40] hover:underline">
          Don't have an account? Register
        </Link>
      </motion.div>
    </motion.form>
  )
}


