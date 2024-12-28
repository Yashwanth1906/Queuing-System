import { motion } from 'framer-motion';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Hero() {
  return (
    <div className="relative min-h-screen hero-gradient pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl tracking-tight font-extrabold text-primary-dark sm:text-5xl md:text-6xl"
          >
            <span className="block">Find the Best Healthcare</span>
            <span className="block text-primary">Near You</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 max-w-md mx-auto text-base text-primary-dark/80 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            Access top-rated hospitals, book appointments, and manage your healthcare journey - all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 max-w-xl mx-auto"
          >
            <div className="flex gap-4 flex-col sm:flex-row justify-center items-center">
              <div className="relative flex-grow max-w-md">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-medium" />
                <Input
                  type="text"
                  placeholder="Enter your location"
                  className="pl-10 pr-4 py-3 w-full border-primary-medium/20 focus:border-primary-medium"
                />
              </div>
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary-dark">
                <Search className="mr-2 h-4 w-4" /> Find Hospitals
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20"
        >
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
            alt="Modern Hospital"
            className="rounded-xl shadow-2xl w-full object-cover h-[400px]"
          />
        </motion.div>
      </div>
    </div>
  );
}
