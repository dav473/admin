import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Company } from "@/types";
import React from "react";
import NewMetaInfo from "./NewMetaInfo";

interface Props {
  className: string;
  company: Company | undefined;
  isEdit?: boolean;
}

const CompanyMetaInfoCard = ({ className, company, isEdit }: Props) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Meta Info</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-60 overflow-auto">
          <form>
            <div className="grid w-full items-center gap-4 px-1">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="meta1">BILLING ADDRESS</Label>
                <Input id="meta1" value="1600 Pennsylvania Avenue" readOnly />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="meta2">BILLING ZIPCODE</Label>
                <Input id="meta2" value="24526456" readOnly />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="meta3">SHIPPING COUNTRY</Label>
                <Input id="meta3" value="Canada" readOnly />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="meta1">BILLING ADDRESS</Label>
                <Input id="meta1" value="1600 Pennsylvania Avenue" readOnly />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="meta2">BILLING ZIPCODE</Label>
                <Input id="meta2" value="24526456" readOnly />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="meta3">SHIPPING COUNTRY</Label>
                <Input id="meta3" value="Canada" readOnly />
              </div>
              <Separator />
              <div className="flex flex-col space-y-1.5">
                <NewMetaInfo />
                <NewMetaInfo />
                <NewMetaInfo />
              </div>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanyMetaInfoCard;
