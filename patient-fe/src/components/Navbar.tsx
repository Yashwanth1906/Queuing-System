import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Activity className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-primary">Cure-OPS</span>
            </motion.div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost">Find Hospitals</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">About Us</Button>
            <Button variant="ghost">Contact</Button>
            <Button onClick={()=>navigate("/register")}variant="default">Sign In</Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md"
            >
              <Button variant="ghost" className="w-full justify-start">
                Find Hospitals
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Services
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                About Us
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Contact
              </Button>
              <Button onClick={() => navigate("/register")} variant="default" className="w-full">
                Sign In
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
}

