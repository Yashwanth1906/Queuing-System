// import { PatientNavbar } from '@/components/PatientNavbar';
import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { HospitalGrid } from '@/components/Hospital-grid';
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import introJs from 'intro.js';
import 'intro.js/introjs.css'; 
import { useNavigate, useSearchParams } from 'react-router-dom';

import { motion } from 'framer-motion';
import { Activity, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
// import { useNavigate } from 'react-router-dom';
import '../App.css'; 
import { ChatBot } from '@/components/chatbot';



export interface Hospital {
  id: string;
  code: string;
  name: string;
  location: string;
  city: string;
  state: string;
  dbURL: string;
}


const startTour = () => {
  introJs()
    .setOptions({
      showProgress: true,
      showStepNumbers: true,
      exitOnOverlayClick: false,
      disableInteraction: true,
      tooltipClass: 'introjs-tooltip', 
      highlightClass: 'introjs-fixParent', 
      nextLabel: 'Next Step', 
      prevLabel: 'Previous Step',
      doneLabel: 'Finish Tour', 
    })
    .start();
};

function HomePage() {
  const navigate=useNavigate();

  const handleLogout = () => {
    navigate("/")    
  };

  return (
    <>
      <PatientNavbar onLogout={handleLogout}  />
      <Home />
      <ChatBot/>
    </>
  );
}

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [sp,]=useSearchParams();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/patient/gethospitals`, {
        headers: {
          Authorization: localStorage.getItem('patienttoken'),
        },
      })
      .then((res) => {
        setHospitals(res.data.hospitals);
        setLoading(false);
      })
      .catch(() => {
        alert('Error fetching hospital data.');
      });
  }, []);

  if(!loading)
  {
    const isFirstTime = sp.get("first");
    if (isFirstTime != null && !loading) {
      setTimeout(() => {
        startTour();
        localStorage.setItem('firstTimeUser', 'false');
      }, 500); 
    }
  }

 

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleViewDetails = (id: string) => {
    console.log('View details for hospital:', id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#CFFFDC]/30 to-white ">
      <main className="container mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-[#253D2C] mb-4" id="navbar">
            Find Your Perfect Healthcare Provider
          </h1>
          <p className="text-lg text-[#253D2C]/70 mb-8">
            Browse through our network of trusted hospitals and healthcare facilities.
          </p>

          <div className="relative max-w-xl mx-auto" id="search-bar"  data-intro="Use this search bar to filter hospitals by name, location, or specialty. Quickly find the best healthcare provider for your needs.">
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
          data-intro="Each hospital card provides essential details. Click here to book appointments or view more information about the hospital"
        />

        <button
          onClick={startTour}
          className="fixed bottom-4 right-4 bg-[#68BA7F] text-white px-6 py-2 rounded-lg shadow-lg hover:bg-[#2E6F40]"
        >
          Take a Tour
        </button>
      </main>
    </div>
  );
}



interface PatientNavbarProps {
  onLogout: () => void;
}

export function PatientNavbar({ onLogout }: PatientNavbarProps) {
  const navigate=useNavigate()  
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Activity className="h-8 w-8 text-[#2E6F40]" />
              <span className="text-xl font-bold text-[#2E6F40]">Cure-OPS</span>
            </motion.div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Button onClick={() => navigate("/dashboard")} variant="ghost" className="text-[#253D2C] hover:text-[#2E6F40] hover:bg-[#CFFFDC]" data-intro="This is your dashboard. Here you can view and manage your profile, personal details, and activity.">Dashboard</Button>
            <Button variant="ghost" className="text-[#253D2C] hover:text-[#2E6F40] hover:bg-[#CFFFDC]" data-intro="Track your appointments and view the queue status in real time. Stay informed about your healthcare schedule.">My Appointments</Button>
          
            <Button 
              variant="ghost" 
              onClick={onLogout}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-[#2E6F40]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4">
                  <Button variant="ghost" className="justify-start text-[#253D2C] hover:text-[#2E6F40] hover:bg-[#CFFFDC]">
                    Dashboard
                  </Button>
                  <Button variant="ghost" className="justify-start text-[#253D2C] hover:text-[#2E6F40] hover:bg-[#CFFFDC]">
                    My Bookings
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={onLogout}
                    className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default HomePage;
