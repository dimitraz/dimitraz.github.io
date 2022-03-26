import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Folder from "../components/folder"
import SEO from "../components/seo"

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  text-align: center;
  margin-top: -2em;
`

const Item = styled.div`
  padding: 2em;
`

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />

      <Container>
        <Item>
          <Folder text="Home" location={location} path={"/"} />
        </Item>
        <Item>
          <Folder text="Blog" location={location} path={"/posts"} />
        </Item>
        <Item>
          <Folder text="Photos" location={location} path={"/photos"} />
        </Item>
      </Container>
    </Layout>
  )
}

export default Home
