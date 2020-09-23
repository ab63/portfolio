import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 2 / span 12;
  grid-row: 1/2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`
export const NavItems = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
`

export const NavItem = styled.li`
  display: inline-block;
  text-align: center;
  padding-left: 2rem;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textDark};
    font-weight: 700;
  }
  a:hover {
    cursor: pointer;
  }
`
