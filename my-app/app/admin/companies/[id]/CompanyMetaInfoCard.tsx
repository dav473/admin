import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from "@/components/ui/separator"
import { Company } from '@/types'
import { Selection } from "@/components/ui/cus_selection";
import React from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

interface Props{
    className:string,
    company:Company|undefined
}

const CompanyMetaInfoCard = ({className,company}:Props) => {
  return (
<>
<Card className={className}>
      <CardHeader>
        <CardTitle >Meta Info</CardTitle>
      </CardHeader>
      <CardContent>
   
     

      </CardContent>
    </Card>
</>
  )
}

export default CompanyMetaInfoCard