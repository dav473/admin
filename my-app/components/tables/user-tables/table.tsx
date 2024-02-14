"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/cus_data-table";
import { Heading } from "@/components/ui/cus_heading";
import { Separator } from "@/components/ui/separator";
import { User, Company } from "@/types/index";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { userColumns, companyColumns } from "./columns";
import AddDialog from "@/components/AddDialog";

import UserDialog from "@/components/UserDialog";
import CompanyDialog from '@/components/CompanyDialog';

interface Props {
  data: User[] | Company[];
  dataType?:string;
}

export const InfoTable: React.FC<Props> = ({ data, dataType }:Props) => {
  const router = useRouter();
  const { columns } = dataType === "User" ? { columns: userColumns } : { columns: companyColumns };
  const dialogContent = dataType === "User" ? <UserDialog /> : <CompanyDialog />
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`${dataType} (${data.length})`}
        />
  
        <AddDialog customDialog={dialogContent} />
      </div>
      <Separator />
      
      <DataTable columns={columns} data={data} searchKey="name" />
    </>
  );
};