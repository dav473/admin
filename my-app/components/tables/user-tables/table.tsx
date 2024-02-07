"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/cus_data-table";
import { Heading } from "@/components/ui/cus_heading";
import { Separator } from "@/components/ui/separator";
import { User, Company } from "@/types/index";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { userColumns, companyColumns } from "./columns";

interface Props {
  data: User[] | Company[];
  dataType?:string;
}

export const UserClient: React.FC<Props> = ({ data, dataType }:Props) => {
  const router = useRouter();
  const { columns } = dataType === "User" ? { columns: userColumns } : { columns: companyColumns };
  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`${dataType} (${data.length})`}
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/user/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable columns={columns} data={data} searchKey="name" />
    </>
  );
};