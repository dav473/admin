"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/cus_data-table";
import { Heading } from "@/components/ui/cus_heading";
import { Separator } from "@/components/ui/separator";
import { User, Company } from "@/types/index";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { userColumns, } from "./columns";

interface Props {
  data: User[] | Company[];
  dataType?:string;
}

export const UserClient: React.FC<Props> = ({ data, dataType }:Props) => {
  const router = useRouter();
  console.log(dataType)

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`${dataType} (${data.length})`}
          description="Manage users (Client side table functionalities.)"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/user/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={userColumns} data={data} />
    </>
  );
};