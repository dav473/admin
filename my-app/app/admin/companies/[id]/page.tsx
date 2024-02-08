import React from 'react'
import BreadCrumb from "@/components/breadcrumb";
import { Heading } from '@/components/ui/cus_heading';
import CompanyInfo from '@/components/CompanyInfo';

const breadcrumbItems = [{ title: "Company", link: "/dashboard/companies/Create" }];
const CompanyDetailPage = () => {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <Heading title="Company Details"/>
        <CompanyInfo />
      </div>
    </>
  )
}

export default CompanyDetailPage