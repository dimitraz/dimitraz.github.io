import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Wrapper = styled.section`
  padding: 4em;
  display: flex;

  mobile {
    flex-wrap: wrap;
    flex-direction: column;
  }
`

const Header = styled.header`
  flex: 0 0 30%;
`

const Heading = styled.h1`
  padding: 0;
  margin: 0;
  color: tomato;
`

const Container = styled.section`
  flex: 1 1 auto;
`
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const ListItem = styled.li``

const ListLink = props => (
  <ListItem>
    <Link to={props.to}>{props.children}</Link>
  </ListItem>
)

const Layout = ({ title, children }) => {
  return (
    <Wrapper>
      <Header>
        <Heading>
          <Link to="/">{title}</Link>
        </Heading>

        <List>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/blog/">Blog</ListLink>
          <ListLink to="/photos/">Photos</ListLink>
        </List>
      </Header>

      <Container>{children}</Container>
    </Wrapper>
  )
}

export default Layout
