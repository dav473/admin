import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

interface Props{
  customDialog: ReactNode
}

export default function AddDialog({customDialog}:Props) {
  return (
    <div>
      {" "}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="text-xs md:text-sm">
            {" "}
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[700px]">
          {customDialog}
        </DialogContent>
      </Dialog>
    </div>
  );
}
