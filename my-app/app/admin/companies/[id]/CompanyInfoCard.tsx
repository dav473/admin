import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Company, User } from "@/types";
import { Selection } from "@/components/ui/cus_selection";
import React from "react";

interface Props {
  className: string;
  data: Company | User | undefined;
  type: "company" | "user";
  isEdit?: boolean;
}

const getTitle = (
  data: Company | User | undefined,
  type: string
): string | undefined => {
  if (isCompany(data, type)) {
    return data.name;
  }
  if (isUser(data, type)) {
    return data.first_name + " " + data.last_name;
  }
};

const isCompany = (
  data: Company | User | undefined,
  type: string
): data is Company => {
  return (data as Company).name !== undefined && type === "company";
};

const isUser = (
  data: Company | User | undefined,
  type: string
): data is User => {
  return (data as User).first_name !== undefined && type === "user";
};

const CompanyInfoCard = ({ className, data, type, isEdit }: Props) => {
  let title = getTitle(data, type);

  return (
    <>
      <Card className={className}>
        <CardHeader>
          {isEdit ? (
            <CardDescription>{data?.uuid}</CardDescription>
            
          ) : (
            <CardTitle>{title}</CardTitle>
          )}
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="id">{isEdit ? "NAME" : "UUID"}</Label>
                <Input id="id" value={!isEdit ? data?.uuid : title} readOnly />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="created">CREATED DATE</Label>
                <Input id="created" value={data?.created_at} readOnly />
              </div>
              {isCompany(data, type) ? (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="jurisdiction">JURISDICTION</Label>
                  <Selection data={data?.jurisdiction} />
                </div>
              ) : (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">EMAIL</Label>
                  <Input id="email" value={data?.uuid} readOnly />
                </div>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default CompanyInfoCard;
