import React from "react";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RoleSelector from '@/components/ui/cus_role_selector'
import { AddMetaInfo } from "./AddMetaInfo";
import { Switch } from "./ui/switch";
import MetaInfoSelector from "./MetaInfoSelector";







const UserDialog = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Add A Company</DialogTitle>
        <DialogDescription>
          Click anywhere else to cancel the dialog.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">

      <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="company" className="text-left">
            COMPANY
          </Label>
          <Input id="company"  className="col-span-3" />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="jurisdiction" className="text-left">
            JURISDICTION
          </Label>
          <MetaInfoSelector className="mt-2" />
        </div>


        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="licenses" className="text-left">
            LICENSES
          </Label>
          <Input id="licenses"  className="col-span-3" />
        </div>


        <div >
        <AddMetaInfo  />
        </div>
      </div>
      
      <DialogFooter>
    

        <Button type="submit">CREATE</Button>

      </DialogFooter>
    </>
  );
};

export default UserDialog;
