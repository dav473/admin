import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import UserDialog from "./UserDialog";

export default function AddDialog() {
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
          <UserDialog />
        </DialogContent>
      </Dialog>
    </div>
  );
}
