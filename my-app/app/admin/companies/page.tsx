import BreadCrumb from "@/components/breadcrumb";
import { InfoTable } from "@/components/tables/user-tables/table";
import { companies } from "@/constants/data";

const breadcrumbItems = [{ title: "Company", link: "/dashboard/companies" }];
export default function CompaniesPage() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <InfoTable data={companies} dataType="Company" />
      </div>
    </>
  );
}
