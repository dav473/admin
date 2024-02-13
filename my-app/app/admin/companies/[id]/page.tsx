import React from "react";
import BreadCrumb from "@/components/breadcrumb";
import CompanyInfo from "@/components/CompanyInfo";

const breadcrumbItems = [
  { title: "Company", link: "/dashboard/companies/Create" },
  { title: "View details", link: "/dashboard/companies/Create" },
];

const CompanyDetailPage = () => {
  return (
    <>
      <div className="h-screen space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="  h-full">
          <CompanyInfo type={"company"} />
        </div>
      </div>
    </>
  );
};

export default CompanyDetailPage;
