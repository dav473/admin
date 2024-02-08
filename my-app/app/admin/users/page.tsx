import BreadCrumb from "@/components/breadcrumb";
import { InfoTable } from "@/components/tables/user-tables/table";
import { users } from "@/constants/data";

const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }];

export default function UsersPage() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />
        <InfoTable data={users} dataType="User" />
      </div>
    </>
  );
}