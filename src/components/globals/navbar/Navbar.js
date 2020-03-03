import React from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"

const Navbar = () => {
  return (
    <nav>
      <NavbarHeader />
      <NavbarLinks />
      <NavbarIcons />
    </nav>
  )
}

export default Navbar
