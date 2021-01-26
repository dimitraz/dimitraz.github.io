import React from "react"
import Navigation from "./navigation"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Graphik from "../fonts/Graphik-Regular.otf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Graphik';
    src: url(${Graphik}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
    line-height: 3em;
    }

  body {
    font-family: 'Graphik', 'Lab Mono';
    color: #222;
    // background-image: url(https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500);
    // https://content.instructables.com/ORIG/FRM/4UUR/GJQE90QG/FRM4UURGJQE90QG.jpg?auto=webp&frame=1&width=320&md=e96c6b78022477eddbeb29d432180372
    // https://i.pinimg.com/736x/2b/97/e4/2b97e4a225d6372fa9c2e473e909854c.jpg
    background-image: ${props =>
      props.location.pathname === "/"
        ? "url(https://content.instructables.com/ORIG/FRM/4UUR/GJQE90QG/FRM4UURGJQE90QG.jpg?auto=webp&frame=1&width=320&md=e96c6b78022477eddbeb29d432180372)"
        : ""};
    background-size: cover;
  }

  a:visited {
    color: #222;
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

const Header = styled.header`
  flex: 0 0 15%;
`
const Container = styled.section`
  flex: 0 0 70%;
`

const Layout = ({ location, children }) => {
  console.log(location)
  return (
    <React.Fragment>
      <GlobalStyle theme="purple" location={location} />

      <Navbar>Hello</Navbar>

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
