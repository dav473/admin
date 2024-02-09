"use client";
import { AlertModal } from "@/components/ui/cus_alert-modal";
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/cus_icon';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnAction } from "@/types/index";
import {
  MoreHorizontal,
  ArrowLeftRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  uuid:string;
  action: ColumnAction[];
}

export const CellAction = ({ uuid,action }: Props) => {
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


          {action
            .filter((item) => item.isTopSeparater)
            .map((item) => (
              <DropdownMenuItem key={item.id}  onClick={() => router.push(item.url+"/"+uuid)}>
              <Icon name={item.icon} className="mr-2 h-4 w-4"/>{item.description}
            </DropdownMenuItem>
            ))}


          <DropdownMenuSeparator />

          {action
            .filter((item) => !item.isTopSeparater)
            .map((item) => (
              <DropdownMenuItem key={item.id} onClick={() => router.push(item.url+"/"+uuid)}>
                <Icon name={item.icon} className="mr-2 h-4 w-4"/>{item.description}
              </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

ArrowLeftRight;
