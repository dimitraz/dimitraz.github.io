import React from "react"
import Navigation from "./navigation"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Graphik from "../fonts/Graphik-Regular.otf"
import { useContext } from "./store/storeHelpers"

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
    background-size: 350px;
    background-image: url(${props =>
      props.background ? `${props.background}` : ""});
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

      <Navbar>Start here</Navbar>

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
