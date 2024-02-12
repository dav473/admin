import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Company } from "@/types";
import { DataTable } from "@/components/ui/cus_data-table";
import { SimpleUserColumns } from "@/components/tables/user-tables/columns";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Props {
  className?:string,
  company:Company|undefined
}


const CompanyMemberCard = ({ className,company }: Props) => {
  const columns = SimpleUserColumns;
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
