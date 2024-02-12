import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from 'react'

interface Props {
    data:string[] | undefined
}
export const Selection = ({data}:Props) => {
  return (
    <div >
        <Select >
  <SelectTrigger disabled={data?.length === 0}>
    <SelectValue placeholder={data?.[0]}  />
  </SelectTrigger>
  <SelectContent  >
    {
        data?.map((item) => <SelectItem key={item} value={item}>{item}</SelectItem>)
    }
  </SelectContent>
</Select>
    </div>
  )
}
