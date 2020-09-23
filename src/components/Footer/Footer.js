import React from "react"
import Logo from "../Navbar/Logo"
import { FooterWrapper } from "../../styles"
import FooterSocialIcons from "./FooterSocialIcons"

export const Footer = () => {
  return (
    <FooterWrapper>
      <Logo />
      <FooterSocialIcons/>
    </FooterWrapper>
  )
}
