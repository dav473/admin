"use client"

import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


import NewMetaInfo from "@/app/admin/companies/[id]/NewMetaInfo"

export function AddMetaInfo() {
  return (
    <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>  <h4 className="text-sm font-semibold ">
    Meta Info
  </h4></AccordionTrigger>
      <AccordionContent className="px-1">
      <NewMetaInfo  />
      </AccordionContent>
    </AccordionItem>
  </Accordion>

  
  )
}