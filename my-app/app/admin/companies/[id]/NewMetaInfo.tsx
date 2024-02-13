import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { ChevronRightIcon, MinusSquare, PlusSquare } from "lucide-react";
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
          <Input id="metax" value="Canada" readOnly />
        </div>
        <div className="basis-2/5 mr-4">
          <Label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="metax"
          >
            VALUE
          </Label>
          <Input id="metax" value="Canada" readOnly />
        </div>
        <div>
          <Button
            className="mr-4 ring-1 ring-neutral-950  ring-inset"
            variant="outline"
            size="icon"
          >
            <MinusSquare className="h-6 w-6" />
          </Button>
          <Button
            className="ring-1 ring-green-500 ring-inset"
            variant="outline"
            size="icon"
          >
            <PlusSquare className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default NewMetaInfo;
