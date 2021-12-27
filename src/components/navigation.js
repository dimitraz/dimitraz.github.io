import React from "react"
import styled from "styled-components"
import Folder from "../components/folder"

const Nav = styled.div`
  display: flex;
  flex-direction: column;
`

const NavItem = props => {
  const isActive = props.location.pathname === props.path
  return <Folder text={props.text} isActive={isActive} path={props.path} />
}

const Navigation = ({ location }) => {
  return (
    <Nav>
      <NavItem text="Home" location={location} path={"/"} />
      <NavItem text="Blog" location={location} path={"/posts"} />
      <NavItem text="Photos" location={location} path={"/photos"} />
    </Nav>
  )
}

export default Navigation
