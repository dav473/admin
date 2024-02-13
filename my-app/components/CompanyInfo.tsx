"use client";
import React from "react";
import CompanyInfoCard from "@/app/admin/companies/[id]/CompanyInfoCard";
import { usePathname } from "next/navigation";
import CompanyMemberCard from "@/app/admin/companies/[id]/CompanyMemberCard";
import { companies } from "@/constants/data";

import CompanyMetaInfoCard from "@/app/admin/companies/[id]/CompanyMetaInfoCard";

const getCompanyInfo = (uuid: string) => {
  return companies.find((company) => company.uuid === uuid);
};
interface Props {
  isEdit?: boolean;
}

const CompanyInfo = ({ isEdit }: Props) => {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/");
  const uuid = pathnameArray[pathnameArray.length - 1];
  const res = getCompanyInfo(uuid);

  return (
    <>
      <div className="flex justify-between flex-wrap flex-1 ">
        <div className="basis-full flex justify-between  flex-wrap  h-96 border rounded">
          <div className="basis-1/3 pr-2">
            <CompanyInfoCard className="w-full h-full" company={res} />
          </div>
          <div className="basis-2/3">
            <CompanyMetaInfoCard
              className="w-full h-full"
              company={res}
              isEdit={isEdit}
            />
          </div>
          <p className="basis-full">fasdfsda</p>
        </div>

        <div className="basis-full pt-10 overflow-y-hidden ">
          <CompanyMemberCard company={res} isEdit={isEdit} />
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
