import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from "@/components/ui/separator"
import { Company } from '@/types'
import { Selection } from "@/components/ui/cus_selection";
import React from 'react'

interface Props{
    className:string,
    company:Company|undefined
}

const CompanyInfoCard = ({className,company}:Props) => {
  return (
<>
<Card className={className}>
      <CardHeader>
        <CardTitle >{company?.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="uuid">UUID</Label>
              <Input id="uuid" value={company?.uuid} readOnly />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="created">CREATED DATE</Label>
              <Input id="created" value={company?.created_at} readOnly />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="jurisdiction">JURISDICTION</Label>
              <Selection data={company?.jurisdiction} />
            </div>         
          </div>
        </form>
      </CardContent>
    </Card>
</>
  )
}

export default CompanyInfoCard