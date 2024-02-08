"use client";

import { Company, User } from "@/types/index";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Leaf } from "lucide-react";
import { Selection } from "../../ui/cus_selection";
import { UserActions, CompanyActions } from "@/constants/data";

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
