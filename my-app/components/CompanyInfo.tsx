"use client";
import React from "react";
import CompanyInfoCard from "@/app/admin/companies/[id]/CompanyInfoCard";
import { usePathname } from "next/navigation";
import CompanyMemberCard from "@/app/admin/companies/[id]/CompanyMemberCard";
import { companies } from "@/constants/data";

import { Separator } from "./ui/separator";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import CompanyMetaInfoCard from "@/app/admin/companies/[id]/CompanyMetaInfoCard";

const getCompanyDate = (uuid: string) => {
  return companies.find((company) => company.uuid === uuid);
};

const tags = Array.from({ length: 40 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

// <div className="w-full bg-red-200">
// <CompanyMemberCard company={res} />
// </div>

// <div className="flex  flex-wrap space-x-4 ">
// <div className="w-2/6 flex-none">
//   <CompanyInfoCard className="w-full" company={res} />
// </div>
// <div className="w-3/6 flex-1">
//   <CompanyMetaInfoCard className="w-full" company={res} />
// </div>
// <div className="w-2/6 flex-none">
//   <CompanyInfoCard className="w-full" company={res} />
// </div>
// <div className="w-3/6 flex-1">
//   <CompanyMetaInfoCard className="w-full" company={res} />
// </div>
// </div>
const CompanyInfo = () => {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/");
  const uuid = pathnameArray[pathnameArray.length - 1];
  const res = getCompanyDate(uuid);

  return (
    <>
      <div className="flex justify-between flex-wrap flex-1 ">
        <div className="basis-1/3 pr-2 h-80">
          <CompanyInfoCard className="w-full h-full" company={res} />
        </div>
        <div className="basis-2/3 pr-2 h-80">
          <CompanyMetaInfoCard className="w-full h-full" company={res} />
        </div>
        <div className="basis-full pt-2 overflow-y-hidden ">
            <CompanyMemberCard company={res} />
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
