"use client"
import React from "react";
import CompanyInfoCard from "@/app/admin/companies/[id]/CompanyInfoCard";
import { usePathname } from 'next/navigation'
import CompanyMemberCard from "@/app/admin/companies/[id]/CompanyMemberCard";
import {companies} from "@/constants/data";
import {Company} from "@/types/index"

const getCompanyDate = (uuid:string)=>{
  return companies.find(company => company.uuid === uuid);
}

const CompanyInfo = () => {
  const pathname = usePathname()
  const pathnameArray = pathname.split("/")
  const uuid = pathnameArray[pathnameArray.length - 1]
  const res = getCompanyDate(uuid);
  return (
    <>
   <div className="flex space-x-6 ">

    <div className="w-2/6">
    <CompanyInfoCard className="w-full" company={res}/>
    </div>
    <div className="w-4/6 * + *:my-1">
      <CompanyMemberCard className="w-full" users={res?.user} />  
      <CompanyMemberCard className="w-full" users={res?.user} />  
      <CompanyMemberCard className="w-full" users={res?.user} />  
      <CompanyMemberCard className="w-full" users={res?.user} />  
      <CompanyMemberCard className="w-full" users={res?.user} />  
    </div> 

   </div>
    </>
  );
};

export default CompanyInfo;
