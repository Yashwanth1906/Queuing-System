import { PatientNavbar } from '@/components/PatientNavbar';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { HospitalGrid } from '@/components/Hospital-grid';
import axios from 'axios';
import { BACKEND_URL } from '../../config';


export interface Hospital {
  id: string;
  code: string;
  name: string;
  location: string;
  city: string;
  state: string;
  dbURL: string;
}

function HomePage() {
  const handleLogout = () => {
    // Handle logout logic
    console.log('Logging out...');
  };

  return (
    <>
      <PatientNavbar onLogout={handleLogout} />
      <Home />
    </>
  );
}


 function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hospitals,setHospitals]=useState<Hospital[]>([]);
  const [loading,setLoading]=useState<boolean>(true);
  

  useEffect(()=>{
	axios.get(`${BACKEND_URL}/api/patient/gethospitals`,{
		headers:{
			Authorization:localStorage.getItem("patienttoken"),
		}
	}).then((res)=>{
		console.log(res);
		setHospitals(res.data.hospitals);
		setLoading(false);
        
	}).catch(()=>{
		alert("error");

	})


  },[]);

  if(loading)
  {
	  return(
		  <div>
		  Loading...
		  </div>
	  )
  }
  
  const handleViewDetails = (id: string) => {
    // Handle navigation to detail page
    console.log('View details for hospital:', id);
  };

  return (
   <div className="min-h-screen bg-gradient-to-br from-[#CFFFDC]/30 to-white">
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-[#253D2C] mb-4">
            Find Your Perfect Healthcare Provider
          </h1>
          <p className="text-lg text-[#253D2C]/70 mb-8">
            Browse through our network of trusted hospitals and healthcare facilities
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#68BA7F]/70" />
            <Input
              type="text"
              placeholder="Search hospitals by name, location, or specialty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-6 bg-white/80 backdrop-blur-sm border-[#68BA7F]/20 focus:border-[#2E6F40] text-[#253D2C]"
            />
          </div>
        </motion.div>

        <HospitalGrid 
          hospitals={hospitals} 
          onViewDetails={handleViewDetails}
        />
      </main>
    </div>
  ); 
}

export default HomePage;
