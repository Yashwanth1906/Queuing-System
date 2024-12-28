import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  link: string;
  description: string;
}

export function ServiceCard({ title, icon: Icon, link, description }: ServiceCardProps) {
  return (
    <Link 
      to={link} 
      className="bg-[#CFFFDC] p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <Icon className="w-12 h-12 mb-4 text-[#2E6F40]" />
      <h3 className="text-xl font-semibold mb-2 text-[#253D2C]">{title}</h3>
      <p className="text-[#2E6F40]">{description}</p>
    </Link>
  );
}