import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Company } from "@/types";
import { DataTable } from "@/components/ui/cus_data-table";
import {
  EditSimplerUserColumns,
  SimpleUserColumns,
} from "@/components/tables/user-tables/columns";

interface Props {
  className?: string;
  company: Company | undefined;
  isEdit?: boolean;
}

const CompanyMemberCard = ({ className, company, isEdit }: Props) => {
  const columns = isEdit ? EditSimplerUserColumns : SimpleUserColumns;
  return (
    <>
      <Card className="flex-1">
        <CardHeader>
          <CardTitle>Company Members {`(${company?.user?.length})`}</CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <DataTable columns={columns} data={company?.user} />
        </CardContent>
      </Card>
    </>
  );
};

export default CompanyMemberCard;
