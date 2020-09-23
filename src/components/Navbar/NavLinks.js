import React from "react"
import Link from "gatsby-link"
import { NavItems, NavItem } from "../../styles"

const NavLinks = () => (
  <NavItems>
    <NavItem>
      <Link to="home">home</Link>
    </NavItem>
    <NavItem>
      <Link to="about">about</Link>
    </NavItem>
    <NavItem>
      <Link to="skills">skills</Link>
    </NavItem>
    <NavItem>
      <Link to="work">work</Link>
    </NavItem>
    <NavItem>
      <Link to="contact">contact</Link>
    </NavItem>
    <NavItem>
      <Link to="blog">blog</Link>
    </NavItem>
  </NavItems>
)

export default NavLinks;