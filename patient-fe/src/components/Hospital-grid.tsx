import { motion } from 'framer-motion';
import { HospitalCard } from './hospital-card';
import type { Hospital } from '@/lib/types';

interface HospitalGridProps {
  hospitals: Hospital[];
  onViewDetails: (id: string) => void;
}

export function HospitalGrid({ hospitals, onViewDetails }: HospitalGridProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {hospitals.map((hospital,) => (
        <HospitalCard
          key={hospital.id}
          hospital={hospital}
          onViewDetails={onViewDetails}
        />
      ))}
    </motion.div>
  );
}
