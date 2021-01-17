import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const Nav = styled.div`
  display: flex;
  flex-direction: column;
`

const NavLink = styled(Link)`
  text-decoration: none;
  padding-bottom: 2em;
  width: 65px;
  text-align: center;

  &:active {
    > .itemText {
      background: lightblue;
    }
  }
`

const NavLinkText = styled.span`
  border: 1px dotted;
  background: ${props => (props.isActive ? "lightblue" : "none")};
`

const NavItem = props => {
  const isActive = props.location.pathname === props.to
  return (
    <NavLink to={props.to}>
      {props.icon && <Img fixed={props.icon} />} <br />
      <NavLinkText className="itemText" isActive={isActive}>
        {props.children}
      </NavLinkText>
    </NavLink>
  )
}

const Navigation = ({ location }) => {
  const data = useStaticQuery(graphql`
    query IconQuery {
      folderIcon: file(absolutePath: { regex: "/folder.png/" }) {
        childImageSharp {
          fixed(width: 65, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  const icon = data?.folderIcon?.childImageSharp?.fixed

  return (
    <Nav>
      <NavItem to="/" location={location} icon={icon}>
        Home
      </NavItem>
      <NavItem to="/blog" location={location} icon={icon}>
        Blog
      </NavItem>
      <NavItem to="/photos" location={location} icon={icon}>
        Photos
      </NavItem>
    </Nav>
  )
}

export default Navigation
