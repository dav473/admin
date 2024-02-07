"use client";
import { AlertModal } from "@/components/ui/cus_alert-modal";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@/constants/data";
import { Edit, MoreHorizontal, ShieldMinus,BookUser, ArrowLeftRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CellActionProps {
  data: User;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const onConfirm = async () => {};

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem  onClick={() => console.log("TODO")} > 
          <BookUser className="mr-2 h-4 w-4" /> View details</DropdownMenuItem>

          <DropdownMenuItem  onClick={() => console.log("TODO")} > 
          <ArrowLeftRight className="mr-2 h-4 w-4" /> View transactions</DropdownMenuItem>
            <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/user/${data.uuid}`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <ShieldMinus className="mr-2 h-4 w-4" /> Deactive
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};


ArrowLeftRight