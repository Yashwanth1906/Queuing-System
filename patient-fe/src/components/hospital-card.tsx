import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import type { Hospital } from '@/lib/types';

interface HospitalCardProps {
  hospital: Hospital;
  onViewDetails: (id: string) => void;
}

export function HospitalCard({ hospital, onViewDetails }: HospitalCardProps) {

return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow border-[#68BA7F]/20">
        <CardHeader>
          <div className="w-12 h-12 bg-[#2E6F40]/10 rounded-lg flex items-center justify-center mb-4">
            <Building2 className="w-6 h-6 text-[#2E6F40]" />
          </div>
          <CardTitle className="text-xl text-[#253D2C]">{hospital.name}</CardTitle>
          <CardDescription className="text-[#253D2C]/70">{hospital.code}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-[#253D2C]/80">
            <p>{hospital.location}</p>
            <p>{hospital.city}, {hospital.state}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={() => onViewDetails(hospital.id)}
            className="w-full bg-[#2E6F40] hover:bg-[#253D2C] text-white"
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );

}
