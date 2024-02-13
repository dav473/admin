import React from "react";
import BreadCrumb from "@/components/breadcrumb";
import CompanyInfo from "@/components/CompanyInfo";

const breadcrumbItems = [
  { title: "Company", link: "/dashboard/companies/Create" },
];

const CompanyEditPage = () => {
  return (
    <>
      <div className="h-screen space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="  h-full">
          <CompanyInfo isEdit={true} />
        </div>
      </div>
    </>
  );
};

export default CompanyEditPage;
