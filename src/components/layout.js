import React, { useState } from "react"
import Navigation from "./navigation"
import styled, { css } from "styled-components"
import sky from "../../content/assets/sky.webp"
import Graphik from "../fonts/Graphik-Regular.otf"
import { createGlobalStyle } from "styled-components"
import { useThemeContext } from "../context/helpers"

export const SansSerifStack = css`
  font-family: "Graphik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol";
`

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Graphik';
    src: url(${Graphik}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
    line-height: 3em;
    }

  body, h1, a, a:active, a:visited {
    color: ${props => (props.theme === "white" ? "#eee" : "#222")};
  }

  body {
    font-family: 'IBM Plex Mono', 'Lab Mono';
    background-repeat: repeat;
    background-color: ${props =>
      props.location.pathname === "/" ? "#b4ceea" : "white"};
    background-size: ${props =>
      props.location.pathname === "/" ? "cover" : "350px"};
    background-image: url(${props =>
      props.location.pathname === "/"
        ? `${sky}`
        : props.background
        ? `${props.background}`
        : ""});
  }
`

const Navbar = styled.header`
  background: black;
  color: white;
  width: 100%;
  height: auto;
  padding: 0.5em;
`

const Wrapper = styled.section`
  padding: 8em 6em;
  display: grid;
  grid-template-columns: 15% 75%;
  max-width: 2500px;

  mobile {
    flex-wrap: wrap;
    flex-direction: column;
  }
`

const Header = styled.header`
  display: grid;
  position: fixed;
  padding: 8em 0 8em 6em;
`

const Container = styled.section``

const Dropdown = styled.ul`
  background: black;
  width: 15%;
  color: white;
  margin: 0;
  padding: 1em 0 0 0;
  position: fixed;
  z-index: 10;
`
const DropdownItem = styled.li`
  padding: 0 0 1em 1.5em;
  list-style: none;
`

const Layout = ({ location, children }) => {
  const { theme, background } = useThemeContext()
  const [visible, setVisibility] = useState(false)

  return (
    <React.Fragment>
      <GlobalStyle location={location} theme={theme} background={background} />

      <Navbar
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
      >
        Start
      </Navbar>

      {visible ? (
        <Dropdown
          onMouseEnter={() => setVisibility(true)}
          onMouseLeave={() => setVisibility(false)}
        >
          <DropdownItem>
            <a href="https://github.com/dimitraz">Github</a>
          </DropdownItem>
        </Dropdown>
      ) : null}

      <Header>
        <Navigation location={location} />
      </Header>

      <Wrapper>
        <Container></Container>
        <Container>{children}</Container>
      </Wrapper>
    </React.Fragment>
  )
}

export default Layout
