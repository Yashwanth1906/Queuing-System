import { motion } from 'framer-motion';
import { Check, Calendar, Clock, Building2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ConfirmBookingProps {
  slotId: string;
  onConfirm: () => void;
}

export function ConfirmBooking({ slotId, onConfirm }: ConfirmBookingProps) {
  // Sample booking details
  const bookingDetails = {
    patientName: "John Doe",
    phone: "+91 98765 43210",
    department: "Cardiology",
    date: "March 20, 2024",
    slot: "8:00 AM - 12:00 PM",
    consultationType: "Regular Checkup",
    fee: "₹800"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-[#CFFFDC] rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-[#2E6F40]" />
        </div>
        <h2 className="text-2xl font-bold text-[#253D2C]">Confirm Your Appointment</h2>
        <p className="text-[#253D2C]/70">Please review the details below</p>
      </div>

      <div className="space-y-6 bg-[#CFFFDC]/10 p-6 rounded-lg">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-[#2E6F40]" />
            <div>
              <p className="text-[#253D2C]">{bookingDetails.patientName}</p>
              <p className="text-sm text-[#253D2C]/70">{bookingDetails.phone}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Building2 className="w-5 h-5 text-[#2E6F40]" />
            <div>
              <p className="text-[#253D2C]">{bookingDetails.department}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#2E6F40]" />
            <span className="text-[#253D2C]">{bookingDetails.date}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#2E6F40]" />
            <span className="text-[#253D2C]">{bookingDetails.slot}</span>
          </div>
        </div>

        <div className="border-t border-[#68BA7F]/20 pt-4 mt-4">
          <div className="flex justify-between text-[#253D2C]">
            <span>Consultation Type:</span>
            <span>{bookingDetails.consultationType}</span>
          </div>
          <div className="flex justify-between font-semibold text-[#253D2C] mt-2">
            <span>Consultation Fee:</span>
            <span>{bookingDetails.fee}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button
          onClick={onConfirm}
          className="w-full bg-[#2E6F40] hover:bg-[#253D2C]"
        >
          Confirm Booking
        </Button>
        <p className="text-xs text-center text-[#253D2C]/70">
          By confirming, you agree to our terms and conditions
        </p>
      </div>
    </motion.div>
  );
}
