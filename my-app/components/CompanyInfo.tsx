"use client";
import React from "react";
import BasicInfoCard from "@/app/admin/companies/[id]/CompanyInfoCard";
import { usePathname } from "next/navigation";
import ListInfoCard from "@/app/admin/companies/[id]/ListInfoCard";
import { companies,users } from "@/constants/data";

import MetaInfoCard from "@/app/admin/companies/[id]/CompanyMetaInfoCard";
import ResetSaveBtn from "./ResetSaveBtn";

const getInfo= (type:string, uuid: string) => {
  if(type === "company"){
    return companies.find((target) => target.uuid === uuid);
  }
    return users.find((target) => target.uuid === uuid);
};
interface Props {
  type:"user" | "company"
  isEdit?: boolean;
}

const CompanyInfo = ({ type, isEdit }: Props) => {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/");
  const uuid = pathnameArray[pathnameArray.length - 1];
  const res = getInfo(type,uuid);

  return (
    <>
      <div className="flex justify-between flex-wrap flex-1 ">
        <div className="basis-full flex justify-between  flex-wrap  h-full border-none">
          <div className="basis-1/3 pr-2">
            <BasicInfoCard className="w-full h-full" data={res} type={type}  isEdit={isEdit}/>
          </div>
          <div className="basis-2/3">
            <MetaInfoCard
              className="w-full h-full"
              data={res}
              isEdit={isEdit}
              type={type}  
            />
          </div>
          {isEdit && (
            <div className="basis-full bg-white border rounded-lg mt-1">
              <ResetSaveBtn />
            </div>
          )}
        </div>

        <div className="basis-full pt-4 overflow-y-hidden ">
          <ListInfoCard data={res} isEdit={isEdit}  type={type}   />
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
