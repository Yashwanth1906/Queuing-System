import { motion } from 'framer-motion';
import { Activity, LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface PatientNavbarProps {
  onLogout: () => void;
}

export function PatientNavbar({ onLogout }: PatientNavbarProps) {
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
            <Button variant="ghost" className="text-[#253D2C] hover:text-[#2E6F40] hover:bg-[#CFFFDC]">Dashboard</Button>
            <Button variant="ghost" className="text-[#253D2C] hover:text-[#2E6F40] hover:bg-[#CFFFDC]">My Appointments</Button>
            <Button variant="ghost" className="text-[#253D2C] hover:text-[#2E6F40] hover:bg-[#CFFFDC]">Medical Records</Button>
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
                    My Appointments
                  </Button>
                  <Button variant="ghost" className="justify-start text-[#253D2C] hover:text-[#2E6F40] hover:bg-[#CFFFDC]">
                    Medical Records
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
