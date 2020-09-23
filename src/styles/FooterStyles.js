import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 2/ span 12;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const FooterSocialWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    & img {
        padding-left: 2rem;
        width: 64px;

    }
`