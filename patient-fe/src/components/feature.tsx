import { motion } from 'framer-motion';
import { Calendar, Search, Clock, Heart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: Search,
    title: 'Find Hospitals',
    description: 'Search and compare hospitals based on specialties, ratings, and location.',
  },
  {
    icon: Calendar,
    title: 'Book Appointments',
    description: 'Schedule appointments with your preferred doctors in just a few clicks.',
  },
  {
    icon: Clock,
    title: 'Real-time Updates',
    description: 'Get instant notifications about your appointments and medical records.',
  },
  {
    icon: Heart,
    title: 'Health Records',
    description: 'Access and manage your medical history securely in one place.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-primary-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary-dark sm:text-4xl"
          >
            Everything You Need for Your Healthcare
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-primary-dark/70"
          >
            Manage all your healthcare needs with our comprehensive platform
          </motion.p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative h-full hover:shadow-lg transition-shadow border-primary-medium/20">
                <CardHeader>
                  <div className="p-3 bg-primary-medium/10 rounded-lg w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-primary-dark">{feature.title}</CardTitle>
                  <CardDescription className="text-primary-dark/70">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
