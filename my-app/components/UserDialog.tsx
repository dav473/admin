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







const UserDialog = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>Add A User</DialogTitle>
        <DialogDescription>
          Click anywhere else to cancel the dialog.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">

      <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-left">
            EMAIL
          </Label>
          <Input id="email"  className="col-span-3" />
        </div>


        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="fname" className="text-left">
            FIRST NAME
          </Label>
          <Input id="fname"  className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="lname" className="text-left">
            LAST NAME
          </Label>
          <Input id="lname"  className="col-span-3" />
        </div>



        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="password" className="text-left">
            PASSWORD
          </Label>
          <Input id="password"  className="col-span-3" />
        </div>


        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="role" className="text-left">
            SYSTEM ROLE
          </Label>
          <div id="role" className="col-span-3"><RoleSelector /></div>
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="onboard" className="text-left">
            ONBOARD STATUS
          </Label>
          <div id="onboard" className="col-span-3"><Switch id="airplane-mode" /></div>
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
