import React from 'react'
import Icon from "@/components/ui/cus_icon";
import { Button } from "@/components/ui/button"


const ResetSaveBtn = () => {
  return (
    <div className='flex justify-end my-3 ml-2 pr-8 border-none'>
        <Button className="tracking-widest h-9 px-4 py-2 pr mr-8" variant="secondary"><Icon name="DatabaseBackup" className="mr-2 h-4 w-4" /> RESET</Button>
        <Button className="tracking-widest h-9 px-4 py-2 pr " ><Icon name="Send" className="mr-2 h-4 w-4" />SAVE CHANGES</Button>
    </div>
  )
}

export default ResetSaveBtn