import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, Clock, Phone, Mail, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookingDialog } from '@/components/booking-dialog';
import type { Hospital } from '@/lib/types';
import { useParams, useSearchParams } from 'react-router-dom';
import { BACKEND_URL } from '../../config';
import axios from 'axios';

const sampleHospital: Hospital = {
  id: "1",
  code: "APOLLO-BLR-001",
  name: "Apollo Hospitals Bangalore",
  location: "154/11, Bannerghatta Road",
  city: "Bangalore",
  state: "Karnataka",
  dbURL: "apollo-blr.database.com"
};

const facilities = [
  { icon: Shield, label: "24/7 Emergency Care" },
  { icon: Calendar, label: "Online Appointments" },
  { icon: Phone, label: "+91 80 2630 4050" },
  { icon: Mail, label: "contact@apollohospitals.com" },
  { icon: Globe, label: "www.apollohospitals.com" },
];

interface HospitalDetailsProps {
  hospital?: Hospital; 
}

export function HospitalDetailsPage() {
  const [showBooking, setShowBooking] = useState(false);
  const [loading,setLoading]=useState(true);
  const [sp,setSp] =useSearchParams();
  const [hosp,setHosp]=useState();


  useEffect(()=>{
     console.log(sp.get('code'))
     axios.post(`${BACKEND_URL}/api/admin/gethosp`,{
	  code:sp.get('code')
     },{
	     headers:{
		     Authorization:localStorage.getItem("patienttoken")
	     }
     }).then((res)=>{
	console.log(res.data)
	setHosp(res.data.hosp);
       setLoading(false);

     }).catch(()=>{
	     alert("error");
     })
  },[])

  if(loading)
  {
	  return(
		  <div>
		  Loading..
		  </div>
	  )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CFFFDC]/30 to-white pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-[#2E6F40]/10 rounded-lg flex items-center justify-center">
              <Building2 className="w-8 h-8 text-[#2E6F40]" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-[#253D2C] mb-2">{hosp.name}</h1>
              <p className="text-[#253D2C]/70 mb-4">Hospital Code: {hosp.code}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <p className="text-[#253D2C]/80">
                    <strong>Location:</strong> {hosp.location}
                  </p>
                  <p className="text-[#253D2C]/80">
                    <strong>City:</strong> {hosp.city}
                  </p>
                  <p className="text-[#253D2C]/80">
                    <strong>State:</strong> {hosp.state}
                  </p>
                </div>
                
                <div className="space-y-3">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-center gap-2 text-[#68BA7F]">
                      <facility.icon className="w-5 h-5" />
                      <span>{facility.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => setShowBooking(true)}
                className="bg-[#2E6F40] hover:bg-[#253D2C] text-white"
              >
                Book Appointment
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-[#253D2C] mb-3">Specialties</h3>
            <ul className="space-y-2 text-[#253D2C]/80">
              <li>• Cardiology</li>
              <li>• Neurology</li>
              <li>• Orthopedics</li>
              <li>• Pediatrics</li>
              <li>• Oncology</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-[#253D2C] mb-3">Facilities</h3>
            <ul className="space-y-2 text-[#253D2C]/80">
              <li>• ICU & Critical Care</li>
              <li>• 24/7 Pharmacy</li>
              <li>• Laboratory Services</li>
              <li>• Radiology & Imaging</li>
              <li>• Emergency Services</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-[#253D2C] mb-3">Working Hours</h3>
            <ul className="space-y-2 text-[#253D2C]/80">
              <li>• Emergency: 24/7</li>
              <li>• OPD: 9:00 AM - 9:00 PM</li>
              <li>• Laboratory: 7:00 AM - 8:00 PM</li>
              <li>• Pharmacy: 24/7</li>
              <li>• Visiting Hours: 10:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <BookingDialog 
        open={showBooking} 
        onOpenChange={setShowBooking}
        hospitalId={hosp.code}
      />
    </div>
  );
}
