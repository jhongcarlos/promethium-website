import { Fuel, Droplets, Car, Factory, Wrench, Anchor, Star, Package } from 'lucide-react';

const iconMap = {
  Fuel,
  Droplets,
  Car,
  Factory,
  Wrench,
  Anchor,
  Star,
  Package,
};

export default function CategoryIcon({ name, className = 'w-5 h-5' }) {
  const Icon = iconMap[name] || Package;
  return <Icon className={className} />;
}
