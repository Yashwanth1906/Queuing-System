import { useState } from 'react';
import { motion } from 'framer-motion';
import { format, addDays } from 'date-fns';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { OPSlot, DateSlot } from '@/lib/types';

interface SlotSelectionProps {
  departmentId: string;
  onSelect: (slotId: string) => void;
}

// Generate next 7 days for date selection
const generateDateSlots = (): DateSlot[] => {
  return Array.from({ length: 7 }, (_, i) => {
    const date = addDays(new Date(), i);
    return {
      date: format(date, 'yyyy-MM-dd'),
      day: format(date, 'EEE, MMM d'),
      isAvailable: Math.random() > 0.3 // Simulate availability
    };
  });
};

// Sample OP slot data
const sampleOPSlot: OPSlot = {
  id: 1,
  date: format(new Date(), 'yyyy-MM-dd'),
  slot: "8:00 AM - 12:00 PM",
  count: 20,
  deptid: "1",
  isAvailable: true
};

export function SlotSelection({ departmentId, onSelect }: SlotSelectionProps) {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const dateSlots = generateDateSlots();

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

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

      {/* Date Selection - BookMyShow style */}
      <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
        {dateSlots.map((dateSlot) => (
          <Button
            key={dateSlot.date}
            variant="outline"
            onClick={() => handleDateSelect(dateSlot.date)}
            disabled={!dateSlot.isAvailable}
            className={cn(
              'flex-shrink-0 w-32 h-20 flex flex-col items-center justify-center gap-1 border-[#68BA7F]/20',
              selectedDate === dateSlot.date && 'border-[#2E6F40] bg-[#CFFFDC]/20',
              !dateSlot.isAvailable && 'opacity-50'
            )}
          >
            <span className="text-sm font-medium text-[#253D2C]">
              {dateSlot.day.split(',')[0]}
            </span>
            <span className="text-xs text-[#253D2C]/70">
              {dateSlot.day.split(',')[1]}
            </span>
          </Button>
        ))}
      </div>

      {/* Slot Information */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-[#CFFFDC]/10 p-6 rounded-lg border border-[#68BA7F]/20">
            <h3 className="font-medium text-[#253D2C] mb-4">Available Slot</h3>
            
            <Button
              onClick={() => onSelect(sampleOPSlot.id.toString())}
              disabled={!sampleOPSlot.isAvailable}
              variant="outline"
              className={cn(
                'w-full h-auto p-4 flex flex-col items-center gap-2 border-[#68BA7F]/20',
                sampleOPSlot.isAvailable && 'hover:border-[#2E6F40] hover:bg-[#CFFFDC]/10'
              )}
            >
              <span className="text-lg font-medium text-[#253D2C]">
                Morning Session
              </span>
              <span className="text-sm text-[#253D2C]/70">
                {sampleOPSlot.slot}
              </span>
              <span className="text-xs text-[#68BA7F]">
                {sampleOPSlot.count} slots available
              </span>
            </Button>
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
