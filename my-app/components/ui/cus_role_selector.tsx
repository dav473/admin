import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RoleSelector() {
  return (
    <>
      <Select>
        <SelectTrigger className="col-span-3">
          <SelectValue placeholder="SELECT A SYSTEM ROLE" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel className="justify-center">ROLE</SelectLabel>
            <SelectItem className="justify-center" value="user">
              User
            </SelectItem>
            <SelectItem className="justify-center" value="admin">
              Admin
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
