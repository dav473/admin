import MetaInfoSelector from "@/components/MetaInfoSelector";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {  MinusSquare, PlusSquare } from "lucide-react";
import React from "react";

const NewMetaInfo = () => {
  return (
    <>
          <div className="flex flex-row justify-between  items-end">
        <div className="basis-2/5 mr-4">
          <Label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="metax"
          >
            KEY
          </Label>
          
          <MetaInfoSelector className="mt-2" />
        </div>
        <div className="basis-2/5 mr-4">
          <Label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="metax"
          >
            VALUE
          </Label>
          <Input id="metax"  className="mt-2" readOnly />
        </div>
        <div>
          <Button
            className="mr-2 ring-1  ring-red-500 ring-inset"
            variant="outline"
            size="icon"
          >
            <MinusSquare className="h-4 w-4" />
          </Button>
          <Button
            className="ring-1 ring-green-500 ring-inset"
            variant="outline"
            size="icon"
          >
            <PlusSquare className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default NewMetaInfo;
