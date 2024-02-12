import { icons } from "lucide-react";

export interface ColumnAction{
  id:number;
  isTopSeparater:boolean;
  description:string;
  icon: keyof typeof icons;
  url:string;
}
export interface User{
  uuid: string;
  first_name: string;
  last_name: string;
  company: string[];
  role: string[];
  created_at:string;
  onboarded: boolean;
  isactive:boolean;
};

export interface Company{
  uuid: string;
  created_at: string;
  name: string;
  jurisdiction?: string[];
  user?: User[];
}

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon: keyof typeof icons;
  label?: string;
  description?: string;
}

