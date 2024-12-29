import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { BookingMethod } from './booking-method';
import { DepartmentSelection } from './department-selection';
import { SymptomInput } from './symptom-input';
import { SlotSelection } from './slot-selection';
import { ConfirmBooking } from './confirm-booking';
import { BACKEND_URL } from '../../config';
import axios from 'axios';

type BookingStep = 'method' | 'department' | 'symptom' | 'slots' | 'confirm';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  hospitalId: string;
}

export function BookingDialog({ open, onOpenChange, hospitalId }: BookingDialogProps) {
  const [step, setStep] = useState<BookingStep>('method');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [depts,setdepts]=useState();
  const [loading,setLoading]=useState<boolean>(true);
  const [slots,setSlots]=useState();


  useEffect(()=>{
	  axios.get(`${BACKEND_URL}/api/hospital/getdepartments`,{
		  headers:{
			code:hospitalId	,
			Authorization:localStorage.getItem("patienttoken")
		  }
	  }).then((res)=>{
      console.log(res.data);
		setdepts(res.data.departments);
		setLoading(false);
		

	  }).catch(()=>{
		  alert("error");
	  })



  },[]);



  if(loading)
  {
	  return(
		  <div>
		  Loading..
		  </div>
	  )
  }

  const handleMethodSelect = (method: 'department' | 'symptom') => {
    setStep(method);
  };

  const handleDepartmentSelect = (departmentId: string) => {
    setSelectedDepartment(departmentId);
    setStep('slots');
  };

  const handleSymptomSubmit = (symptom: string) => {
    setSelectedDepartment('predicted-department');
    setStep('slots');
  };

  const handleSlotSelect = (slotId: string) => {
    setSelectedSlot(slotId);
    setStep('confirm');
  };

  const handleConfirm = () => {
    onOpenChange(false);
    setStep('method');
    setSelectedDepartment('');
    setSelectedSlot('');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <AnimatePresence mode="wait">
          {step === 'method' && (
            <BookingMethod onSelect={handleMethodSelect} />
          )}
          {step === 'department' && (
            <DepartmentSelection 
              depts={depts}
              onSelect={handleDepartmentSelect}
            />
          )}
          {step === 'symptom' && (
            <SymptomInput onSubmit={handleSymptomSubmit} />
          )}
          {step === 'slots' && (
            <SlotSelection
	      deptId={selectedDepartment}
              code={hospitalId}
              onSelect={handleSlotSelect}
            />
          )}
          {step === 'confirm' && (
            <ConfirmBooking
              slotId={selectedSlot}
              onConfirm={handleConfirm}
            />
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
