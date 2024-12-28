import { motion } from 'framer-motion';
import { Stethoscope, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookingMethodProps {
  onSelect: (method: 'department' | 'symptom') => void;
}

export function BookingMethod({ onSelect }: BookingMethodProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#253D2C]">Book Your Appointment</h2>
        <p className="text-[#253D2C]/70">Choose how you'd like to proceed</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button
          variant="outline"
          onClick={() => onSelect('department')}
          className="h-32 flex flex-col items-center justify-center gap-2 border-[#68BA7F]/20 hover:border-[#2E6F40] hover:bg-[#CFFFDC]/10"
        >
          <Stethoscope className="w-8 h-8 text-[#2E6F40]" />
          <span className="text-[#253D2C]">Select Department</span>
        </Button>

        <Button
          variant="outline"
          onClick={() => onSelect('symptom')}
          className="h-32 flex flex-col items-center justify-center gap-2 border-[#68BA7F]/20 hover:border-[#2E6F40] hover:bg-[#CFFFDC]/10"
        >
          <Brain className="w-8 h-8 text-[#2E6F40]" />
          <span className="text-[#253D2C]">Enter Symptoms</span>
        </Button>
      </div>
    </motion.div>
  );
}
