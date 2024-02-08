import { icons } from 'lucide-react';

interface Props {
    name: keyof typeof icons;
    color?: string;
    size?: number;
    className?:string;
}
const Icon = ({ name, color, size, className }:Props) => {
  const LucideIcon = icons[name];

  return <LucideIcon className={className} color={color} size={size} />;
};

export default Icon;