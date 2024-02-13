import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Company, User } from "@/types";
import { DataTable } from "@/components/ui/cus_data-table";
import {
  SimpleCompanyColumns,
  EditSimpleCompanyColumns,
  SimpleUserColumns,
  EditSimpleUserColumns,
  
} from "@/components/tables/user-tables/columns";

interface Props {
  className?: string;
  data: Company |User| undefined;
  isEdit?: boolean;
  type:"company" | "user"
}

const getTitle = (
  data: Company | User | undefined,
  type: string
): string | undefined => {
  if (isCompany(data, type)) {
    return `Company Members (${data?.user?.length})`
  }
  if (isUser(data, type)) {
    return `User Roles (${data?.role?.length})`
  }
};

const isCompany = (
  data: Company | User | undefined,
  type: string
): data is Company => {
  return (data as Company).name !== undefined && type === "company";
};

const isUser = (
  data: Company | User | undefined,
  type: string
): data is User => {
  return (data as User).first_name !== undefined && type === "user";
};

export default function ListInfoCard  ({ className, data, isEdit,type }: Props) {
  const title = getTitle(data,type);
  const companyColumns = isEdit ? EditSimpleCompanyColumns : SimpleCompanyColumns;
  const userColumns = isEdit ? EditSimpleUserColumns:SimpleUserColumns;
  return (
    <>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          {isCompany(data,type) ?(
            <DataTable columns={companyColumns} data={data?.user} />
          ):(
            <DataTable columns={userColumns} data={data?.role} />
          )}
        </CardContent>
      </Card>
    </>
  );
};
