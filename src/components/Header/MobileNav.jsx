import { useState } from "react"
import MobileNavList from "./MobileNavList"
import { Turn  as Hamburger } from 'hamburger-react'

export default function MobileNav () {

  const [isOpen, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Hamburger 
        color="#004282" 
        toggled={isOpen} 
        toggle={setOpen} 
        direction="right"
      />
      <MobileNavList isOpen={isOpen} />
    </div>
  )
}
