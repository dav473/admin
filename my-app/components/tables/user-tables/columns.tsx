"use client";

import { Company, User } from "@/types/index";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Leaf } from "lucide-react";
import { Selection } from "../../ui/cus_selection";
import { UserActions, CompanyActions } from "@/constants/data";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/cus_icon";

export const SimpleUserColumns: ColumnDef<User>[] = [
  {
    header: "UUID",
    accessorKey: "uuid",
  },
  {
    header: "FULL NAME",
    id: "name",
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
  },
  {
    header: "ROLE",
    accessorKey: "role",
  },
  {
    header: "EMAIL",
    accessorKey: "uuid",
  },
  {
    header: "ACTION",
    id: "action",
    cell: ({ row }) => (
      <Button className="h-9 px-4 py-2 mr-4" variant="outline">
        <Icon name="ChevronRight" className="mr-2 h-4 w-4" />
        View details
      </Button>
    ),
  },
];

export const EditSimplerUserColumns: ColumnDef<User>[] =
  SimpleUserColumns.slice(0, -1).map((column) => ({ ...column }));
EditSimplerUserColumns.push({
  header: "ACTION",
  id: "action",
  cell: ({ row }) => (
    <div>
      <Button
        className="h-9 px-4 py-2 mr-8 ring-1 ring-neutral-950 ring-inset"
        variant="outline"
      >
        <Icon name="PenLine" className="mr-2 h-4 w-4" />
        Update
      </Button>
      <Button
        className="h-9 px-4 py-2 pr ring-1 ring-red-500 ring-inset"
        variant="outline"
      >
        <Icon name="Trash2" className="mr-2 h-4 w-4" />
        Remove
      </Button>
    </div>
  ),
});

export const userColumns: ColumnDef<User>[] = [
  {
    header: "UUID",
    accessorKey: "uuid",
  },
  {
    header: "FULL NAME",
    id: "name",
    accessorFn: (row) => `${row.first_name} ${row.last_name}`,
  },
  {
    header: "COMPANY & ROLE",
    cell: ({ row }) => {
      const { company, role } = row.original;
      const combinedArray = company.map(
        (company, index) => `${company}  -  ${role[index]}`
      );
      return <Selection data={combinedArray} />;
    },
  },
  {
    header: "ONBOARD",
    accessorKey: "onboarded",
    cell: ({ row }) => {
      const isOnboard = row.getValue("onboarded");
      return <div>{isOnboard ? "Y" : "N"}</div>;
    },
  },
  {
    header: "CREATED DATE",
    accessorKey: "created_at",
    cell: ({ row }) => {
      const created_at: string = row.getValue("created_at");
      return created_at.substring(0, 16).replace(/[A-Z]/g, " ");
    },
  },
  {
    header: "ACCOUNT STATUS",
    accessorKey: "isactive",
    cell: ({ row }) => {
      const isActive: boolean = row.getValue("isactive");
      return <Leaf size={16} color={isActive ? "green" : "red"} />;
    },
  },
  {
    header: "ACTIONS",
    id: "actions",
    cell: ({ row }) => (
      <CellAction uuid={row.original.uuid} action={UserActions} />
    ),
  },
];

export const companyColumns: ColumnDef<Company>[] = [
  {
    header: "UUID",
    accessorKey: "uuid",
  },
  {
    header: "COMPANY",
    accessorKey: "name",
  },
  {
    header: "MEMBER",
    accessorKey: "user",
    cell: ({ row }) => {
      const member: string[] = row.getValue("user");
      return <div>{member.length}</div>;
    },
  },
  {
    header: "JURISDICTION",
    accessorKey: "jurisdiction",
    cell: ({ row }) => {
      const jurisdiction: string[] = row.getValue("jurisdiction");
      return <Selection data={jurisdiction} />;
    },
  },
  {
    header: "CREATED DATE",
    accessorKey: "created_at",
    cell: ({ row }) => {
      const created_at: string = row.getValue("created_at");
      return created_at.substring(0, 16).replace(/[A-Z]/g, " ");
    },
  },
  {
    header: "ACTIONS",
    id: "actions",
    cell: ({ row }) => (
      <CellAction uuid={row.original.uuid} action={CompanyActions} />
    ),
  },
];
