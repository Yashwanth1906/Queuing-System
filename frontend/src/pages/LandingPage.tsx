
import { Link } from 'react-router-dom'
import { ArrowRight, Activity, Users, Clock } from 'lucide-react'
import { Header } from '@/components/component/Header';
import { ServiceCard } from '@/components/component/ServiceCard';
export function HomePageComponent() {
  return (
    <div className="min-h-screen w-screen absolute top-0 left-0 bg-gradient-to-b from-[#CFFFDC] to-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 animate-fade-in">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2E6F40]">
                Modern Healthcare Management
              </h2>
              <p className="text-xl mb-8 text-[#253D2C]">
                Streamlined healthcare solutions for better patient care
              </p>
              <Link 
                to="/patientlogin" 
                className="bg-[#68BA7F] text-white py-3 px-6 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-[#2E6F40] transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-[#68BA7F] rounded-full filter blur-3xl opacity-20 animate-pulse-soft"></div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                  alt="Healthcare"
                  className="relative rounded-2xl shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2E6F40]">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Inventory', icon: Users, link: '/inventorysignin', description: 'Personalized healthcare journey' },
              { title: 'Smart Reception', icon: Activity, link: '/adminsignin', description: 'Efficient patient management' },
              { title: 'Doctor Portal', icon: Clock, link: '/doctorssignin', description: 'Streamlined consultation system' },
            ].map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#CFFFDC] py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#2E6F40]">Svaasth</h3>
              <p className="text-[#253D2C]">Empowering healthcare through innovation</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#2E6F40]">Quick Links</h4>
              <ul className="space-y-2">
                {['Services', 'Features'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-[#253D2C] hover:text-[#68BA7F] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#2E6F40]">Contact</h4>
              <p className="text-[#253D2C]">support@svaasth.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}