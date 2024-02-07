import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/user-tables/client";
import { companies } from "@/constants/data";


type Props = {
  params: {
    title:string,

  };
};

const breadcrumbItems = [{ title: "Company", link: "/dashboard/companies" }];

export default function CompaniesPage() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={companies} dataType="Company" />
      </div>
    </>
  );
}