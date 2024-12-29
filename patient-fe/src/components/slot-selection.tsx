import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface SlotSelectionProps {
  deptId: string;
  onSelect: (slotId: string) => void;
  code: string;
}

function formatDateToDDMMYYYY(date: Date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}

function getNextDateFormatted(date: Date) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + 1);
  return formatDateToDDMMYYYY(nextDate);
}

export function SlotSelection({ deptId, onSelect, code }: SlotSelectionProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [slot1, setSlot1] = useState<any>();
  const [slot2, setSlot2] = useState<any>();
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    axios.post(`${BACKEND_URL}/api/patient/getslots`, { deptId }, {
      headers: {
        code,deptId,Authorization:localStorage.getItem("patienttoken")
      }
    }).then((res) => {
      setSlot1(res.data.date);
      setSlot2(res.data.nextDate);
      setLoading(false);
    }).catch(() => {
      alert("Error fetching slots");
      setLoading(false);
    });
  }, [deptId, code]);

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot: any) => {
    setSelectedSlot(slot);
  };

  const handleConfirmSlot = async (slotid) => {
	  console.log(slotid)
    if (selectedSlot) {
	    try{
                await axios.post(`${BACKEND_URL}/api/patient/bookslot`,{
	     slotid,deptId
     },{
	     headers:{
		     code,Authorization:localStorage.getItem("patienttoken")
	     }

     })




	    }
	    catch(error)
	    {
		    alert("error")
	    }
    

      //onSelect(selectedSlot.id.toString());
      setIsDialogOpen(false);
    }
  };

  const renderSlot = (slot: any, date: string) => {
    if (!slot) {
      return (
        <div className="text-center text-[#253D2C]/70 p-4">
          No slots available for this date
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className={cn(
          'w-full p-4 flex flex-col items-center gap-2 border rounded-md',
           'border-[#68BA7F]',
          selectedSlot?.id === slot.id && 'border-[#2E6F40] bg-[#CFFFDC]/20'
        )}>
          <span className="text-lg font-medium text-[#253D2C]">
            Morning Session
          </span>
          <span className="text-sm text-[#253D2C]/70">
            {slot.slot}
          </span>
          <span className="text-xs text-[#68BA7F]">
            {slot.count} slots available
          </span>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              onClick={() => handleSlotSelect(slot)}
              className="w-full bg-[#2E6F40] hover:bg-[#253D2C] text-white"
            >
              Book This Slot
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Confirm Slot Booking</DialogTitle>
              <DialogDescription>
                Are you sure you want to book this slot?
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p><strong>Date:</strong> {date}</p>
              <p><strong>Time:</strong> {slot.slot}</p>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={()=>handleConfirmSlot(slot.id)} className="bg-[#2E6F40] hover:bg-[#253D2C] text-white">
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  if (loading) {
    return <div className="text-center">Loading slots...</div>;
  }

  const today = new Date();
  const todayFormatted = formatDateToDDMMYYYY(today);
  const nextDayFormatted = getNextDateFormatted(today);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#253D2C]">Select Date</h2>
        <p className="text-[#253D2C]/70">Choose your preferred appointment date</p>
      </div>

      <div className="flex gap-3 justify-center">
        {[todayFormatted, nextDayFormatted].map((date) => (
          <Button
            key={date}
            variant="outline"
            onClick={() => handleDateSelect(date)}
            className={cn(
              'flex-shrink-0 w-32 h-20 flex flex-col items-center justify-center gap-1 border-[#68BA7F]/20',
              selectedDate === date && 'border-[#2E6F40] bg-[#CFFFDC]/20'
            )}
          >
            <span className="text-sm font-medium text-[#253D2C]">
              {date === todayFormatted ? 'Today' : 'Tomorrow'}
            </span>
            <span className="text-xs text-[#253D2C]/70">
              {date}
            </span>
          </Button>
        ))}
      </div>

      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-[#CFFFDC]/10 p-6 rounded-lg border border-[#68BA7F]/20">
            <h3 className="font-medium text-[#253D2C] mb-4">Available Slot</h3>
            {renderSlot(selectedDate === todayFormatted ? slot1 : slot2, selectedDate)}
          </div>

          <div className="text-sm text-[#253D2C]/70 space-y-2">
            <p>• Single morning session: 8:00 AM - 12:00 PM</p>
            <p>• Limited slots available per session</p>
            <p>• Please arrive 15 minutes before your slot</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}


