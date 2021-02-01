import React from "react"
import Navigation from "./navigation"
import styled, { css } from "styled-components"
import { createGlobalStyle } from "styled-components"
import { useContext } from "./store/storeHelpers"
import sky from "../../content/assets/sky.webp"
import Graphik from "../fonts/Graphik-Regular.otf"

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
    color: ${props => (props.theme ? "#eee" : "#222")};
  }

  body {
    font-family: 'IBM Plex Mono', 'Lab Mono';
    background-repeat: repeat;
    background-color: ${props =>
      props.location.pathname == "/" ? "#b4ceea" : "white"};
    background-size: ${props =>
      props.location.pathname == "/" ? "cover" : "350px"};
    background-image: url(${props =>
      props.location.pathname == "/"
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

const Header = styled.header``
const Container = styled.section``

const Layout = ({ location, children }) => {
  const { background, theme } = useContext()

  return (
    <React.Fragment>
      <GlobalStyle location={location} theme={theme} background={background} />

      <Navbar>Start</Navbar>

      <Wrapper>
        <Header>
          <Navigation location={location} />
        </Header>

        <Container>{children}</Container>
      </Wrapper>
    </React.Fragment>
  )
}

export default Layout
