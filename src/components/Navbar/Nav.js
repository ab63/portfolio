import React from "react"
import { NavWrapper } from "../../styles"
import NavLinks from "./NavLinks"
import Logo from "./Logo"

export const Nav = () => {
  return (
    <NavWrapper>
      <Logo />
      <NavLinks />
    </NavWrapper>
  )
}
