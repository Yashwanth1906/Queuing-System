import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import axios from 'axios';

interface QueuePatient {
  id: string;
  name: string;
  estimatedWaitTime: number;
  department: string;
  doctor: string;
  status: 'waiting' | 'in-consultation' | 'completed';
}

export function PatientApt() {
  const [currentUserId, setCurrentUserId] = useState<string>(''); // Replace with actual user ID
  const [queueData, setQueueData] = useState<QueuePatient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const Queue = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/patient/getqueue', { headers:{code:"0001",Authorization:localStorage.getItem('patienttoken') }});
        setQueueData(response.data.queuedata);
        console.log(response.data.queuedata);
        console.log(response.data.queueId);
        setCurrentUserId(response.data.queued);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    Queue();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#CFFFDC] flex items-center justify-center">
        <Card className="p-6 bg-white shadow-lg">
          <p className="text-[#2E6F40]">Loading queue information...</p>
        </Card>
      </div>
    );
  }

  const userPosition = queueData.findIndex(patient => patient.id === currentUserId) + 1;
  const isUserInQueue = userPosition > 0;

  if (!isUserInQueue) {
    return (
      <div className="min-h-screen bg-[#CFFFDC] flex items-center justify-center">
        <Card className="p-8 bg-white shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-[#2E6F40] mb-4">Not in Queue</h2>
          <p className="text-[#253D2C] mb-6">You are currently not in any appointment queue.</p>
          <Button 
            className="w-full bg-[#68BA7F] hover:bg-[#2E6F40] text-white transition-colors"
          >
            Book an Appointment
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#CFFFDC] p-6">
      <Card className="max-w-5xl mx-auto bg-white shadow-lg">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#2E6F40]">Queue Status</h2>
            <Badge className="bg-[#68BA7F] hover:bg-[#2E6F40]">
              Your Position: {userPosition} of {queueData.length}
            </Badge>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-[#2E6F40]">Position</TableHead>
                  <TableHead className="text-[#2E6F40]">Patient</TableHead>
                  <TableHead className="text-[#2E6F40]">Department</TableHead>
                  <TableHead className="text-[#2E6F40]">Doctor</TableHead>
                  <TableHead className="text-[#2E6F40]">Wait Time</TableHead>
                  <TableHead className="text-[#2E6F40]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {queueData.map((patient, index) => (
                  <TableRow 
                    key={patient.id}
                    className={patient.id === currentUserId ? 'bg-[#CFFFDC]' : ''}
                  >
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{patient.name}</TableCell>
                    <TableCell>{patient.department}</TableCell>
                    <TableCell>{patient.doctor}</TableCell>
                    <TableCell>10 mins</TableCell>
                    <TableCell>
                      <Badge 
                        className={
                          patient.status === 'in-consultation' 
                            ? 'bg-[#68BA7F]' 
                            : patient.status === 'completed'
                            ? 'bg-[#253D2C]'
                            : 'bg-[#2E6F40]'
                        }
                      >
                        {patient.status.replace('-', ' ')}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-6 p-4 bg-[#CFFFDC] rounded-lg">
            <h3 className="text-[#2E6F40] font-semibold mb-2">Your Appointment Details</h3>
            <p className="text-[#253D2C]">
              Estimated wait time: <span className="font-bold">
                {queueData[userPosition - 1]?.estimatedWaitTime} minutes
              </span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}