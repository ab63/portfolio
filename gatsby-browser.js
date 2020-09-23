/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import {createGlobalStyle ,ThemeProvider } from "styled-components"
import LightTheme from "./src/themes/light"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html{
        font-family: ${props=> props.theme.fonts.main};
        height: 100%;
        background-color: ${props=> props.theme.colors.background};
    }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={LightTheme}>  
    <GlobalStyles />
  {element}
  </ThemeProvider>
)
