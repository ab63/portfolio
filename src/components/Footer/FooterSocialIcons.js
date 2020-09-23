import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FooterSocialWrapper } from "../../styles"

const FooterSocialIcons = () => {
  const data = useStaticQuery(graphql`
    query {
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterSocialWrapper>
      <a
        href="https://twitter.com/anuj63"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={data.twitter.publicURL} alt="Twitter Logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/anuj-bansal-56562916/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={data.linkedin.publicURL} alt="Linkedin Logo" />
      </a>
      <a
        href="https://github.com/ab63"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={data.github.publicURL} alt="Github Logo" />
      </a>
    </FooterSocialWrapper>
  )
}

export default FooterSocialIcons
