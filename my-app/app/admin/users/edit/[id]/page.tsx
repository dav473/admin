import React from "react";
import BreadCrumb from "@/components/breadcrumb";
import InfoCards from "@/components/CompanyInfo";

const breadcrumbItems = [
  { title: "User", link: "/dashboard/companies/Create" },
  { title: "Edit", link: "/dashboard/companies/Create" },
];

const UserEditPage = () => {
  return (
    <>
      <div className="h-screen space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <div className="h-full">
        <InfoCards isEdit={true} type={'user'} />
        </div>
      </div>
    </>
  );
};

export default UserEditPage;
