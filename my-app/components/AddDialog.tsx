import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from 'lucide-react'
import AddJurisdiction from './AddJurisdiction'

export default function AddDialog () {
  return (
    <div>    <Dialog>
    <DialogTrigger asChild>
      <Button className="text-xs md:text-sm" > <Plus className="mr-2 h-4 w-4" /> Add New</Button>
    </DialogTrigger>


    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Company
          </Label>
          <Input
            id="name"
            defaultValue="Pedro Duarte"
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Jurisdiction
          </Label>
          <AddJurisdiction />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">CREATE</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog></div>
  )
}
