import React from "react"
import Navigation from "./navigation"
import styled from "styled-components"

const Wrapper = styled.section`
  padding: 6em;
  display: flex;
  justify-content: flex-start;

  mobile {
    flex-wrap: wrap;
    flex-direction: column;
  }
`

const Header = styled.header`
  flex: 0 0 25%;
`
const Container = styled.section`
  flex: 1 1 auto;
`

const Layout = ({ location, children }) => {
  return (
    <Wrapper>
      <Header>
        <Navigation location={location} />
      </Header>

      <Container>{children}</Container>
    </Wrapper>
  )
}

export default Layout
