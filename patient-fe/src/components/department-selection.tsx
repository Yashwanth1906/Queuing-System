import { motion } from 'framer-motion';
import { Heart, Brain, Bone, Baby, Activity, Eye, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Department } from '@/lib/types';

interface DepartmentSelectionProps {
  hospitalId: string;
  onSelect: (departmentId: string) => void;
}

const departments: Department[] = [
  { 
    id: '1', 
    name: 'Cardiology',
    description: 'Heart and cardiovascular care, including ECG, Echo, and cardiac surgeries',
    hospitalId: '1'
  },
  { 
    id: '2',
    name: 'Neurology',
    description: 'Brain, spine, and nervous system disorders treatment',
    hospitalId: '1'
  },
  { 
    id: '3',
    name: 'Orthopedics',
    description: 'Bone, joint, and muscle care with advanced surgical facilities',
    hospitalId: '1'
  },
  { 
    id: '4',
    name: 'Pediatrics',
    description: 'Comprehensive healthcare for infants, children, and adolescents',
    hospitalId: '1'
  },
  { 
    id: '5',
    name: 'General Medicine',
    description: 'Primary healthcare and routine medical services',
    hospitalId: '1'
  },
  { 
    id: '6',
    name: 'Ophthalmology',
    description: 'Eye care, vision correction, and surgical procedures',
    hospitalId: '1'
  },
  { 
    id: '7',
    name: 'Dental',
    description: 'Complete dental care including cosmetic dentistry',
    hospitalId: '1'
  },
  { 
    id: '8',
    name: 'Emergency Medicine',
    description: '24/7 emergency care and trauma services',
    hospitalId: '1'
  }
];

const departmentIcons = {
  Cardiology: Heart,
  Neurology: Brain,
  Orthopedics: Bone,
  Pediatrics: Baby,
  'General Medicine': Activity,
  Ophthalmology: Eye,
  Dental: Eye,
  'Emergency Medicine': Stethoscope
};

export function DepartmentSelection({ depts, onSelect }:any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#253D2C]">Select Department</h2>
        <p className="text-[#253D2C]/70">Choose the department for your appointment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {depts.map((dept:any) => {
          const Icon = departmentIcons[dept.name as keyof typeof departmentIcons];
          return (
            <Button
              key={dept.id}
              variant="outline"
              onClick={() => onSelect(dept.id)}
              className="h-auto p-4 flex items-start gap-3 border-[#68BA7F]/20 hover:border-[#2E6F40] hover:bg-[#CFFFDC]/10"
            >
              <div className="w-10 h-10 bg-[#2E6F40]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#2E6F40]" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-[#253D2C]">{dept.name}</h3>
		{dept.doctors.map((doct:any)=>{
			<p>{doct}</p>

		})}
              </div>
            </Button>
          );
        })}
      </div>
    </motion.div>
  );
}
