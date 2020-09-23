import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <Link to="/">
      <img src={data.logo.publicURL} alt="Logo" />
    </Link>
  )
}

export default Logo
