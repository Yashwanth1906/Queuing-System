import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';
import { BACKEND_URL } from '@/../config';
import { useNavigate } from 'react-router-dom';

interface SymptomInputProps {
  onSubmit: (symptom: string) => void;
}

export function SymptomInput({ code }:any) {
  const [symptoms, setSymptoms] = useState('');
  const navigate=useNavigate();
  // console.log(code+"*****")
  const handleSubmit=async()=>{
    try{
      const res=await axios.post(`${BACKEND_URL}/api/patient/bookwithsymptoms`,{
          symptoms        
      },{
        headers:{
          Authorization:localStorage.getItem("patienttoken"),
          code:code
        }
      })
      alert("booking done");
      navigate("/home")
    }
    catch{
      alert("error");
    }

  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#253D2C]">Describe Your Symptoms</h2>
        <p className="text-[#253D2C]/70">We'll help you find the right department</p>
      </div>

      <Textarea
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        placeholder="Please describe your symptoms in detail..."
        className="min-h-[150px] border-[#68BA7F]/20 focus:border-[#2E6F40]"
      />

      <Button
        onClick={handleSubmit}
        disabled={!symptoms.trim()}
        className="w-full bg-[#2E6F40] hover:bg-[#253D2C]"
      >
        Find Department
      </Button>
    </motion.div>
  );
}
