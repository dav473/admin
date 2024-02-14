"use client";

import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "./ui/input";

interface Props{
    className: string
}

const frameworks = [
  {
    value: "custom",
    label: "NEW META FIELD",
  },
  {
    value: "user_country",
    label: "COUNTRY",
  },
  {
    value: "user_phone",
    label: "PHONE",
  },
  {
    value: "user_zip",
    label: "ZIPCODE",
  },
  {
    value: "user_state",
    label: "STATE",
  },
  {
    value: "user_home_phone",
    label: "HOME PHONE",
  },
  {
    value: "user_city",
    label: "CITY",
  },
];


const MetaInfoSelector = ({className}:Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const [showInput, setShowInput] = React.useState(false);





  return (
    <div className={className}>
      {showInput ? <Input type="key" />:<Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select framework..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search meta field..." />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                    if(currentValue === "custom"){
                      setShowInput(true)
                    }
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>}
      
    </div>
  );
};

export default MetaInfoSelector;
