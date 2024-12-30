import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from 'lucide-react';
import axios from 'axios';
import { BACKEND_URL } from '@/config';


const HOS_CODE="0001";
const departments = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Oncology",
  "General",
  "Dermatology",
  "ENT",
];

export function DoctorPredCard() {
  const [department, setDepartment] = useState<string>("");
  const [isSpecialDay, setIsSpecialDay] = useState(false);
  const [doctorCount, setDoctorCount] = useState<number | null>(null);

  const handleCheck = async () => {

    const res=await axios.post(`${BACKEND_URL}/api/hospital/gettmrwdocpred`,{
        dept:department,
        isSpec:isSpecialDay
    },{
        headers:{
            code:HOS_CODE
        }
    })

    console.log(res.data)
    setDoctorCount(Math.ceil(res.data.msg))
  };

  return (
    <Card className="w-full bg-gradient-to-br from-[#CFFFDC]/30 to-white shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-6 h-6 text-[#2E6F40]" />
          <CardTitle className="text-xl font-bold text-[#253D2C]">
            Tomorrow's Doctor Availability
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="department" className="text-[#253D2C] font-medium">
            Select Department
          </Label>
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger className="w-full border-[#68BA7F] focus:ring-[#2E6F40]">
              <SelectValue placeholder="Choose a department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="special-day" className="text-[#253D2C] font-medium">
            Special Day (Holiday/Event)
          </Label>
          <Switch
            id="special-day"
            checked={isSpecialDay}
            onCheckedChange={setIsSpecialDay}
            className="data-[state=checked]:bg-[#2E6F40]"
          />
        </div>

        <Button
          onClick={handleCheck}
          className="w-full bg-[#2E6F40] hover:bg-[#253D2C] text-white transition-colors"
          disabled={!department}
        >
          Check Availability
        </Button>

        {doctorCount !== null && (
          <div className="mt-4 p-4 bg-[#CFFFDC] rounded-lg">
            <p className="text-center text-[#253D2C]">
              <span className="font-bold text-xl">{doctorCount}</span>{' '}
              {doctorCount === 1 ? 'doctor' : 'doctors'} available tomorrow in{' '}
              <span className="font-semibold capitalize">{department}</span>
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}