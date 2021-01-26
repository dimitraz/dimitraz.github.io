import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Draggable from "react-draggable"
import styled from "styled-components"
import Msg from "../../content/assets/message.png"
import polaroid from "../../content/assets/polaroid.png"

const Window = styled.div`
  cursor: move;
  color: white;
  background: black;
  max-width: 500px;
  margin: auto;
  user-select: none;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2));
`

const WindowBar = styled.div`
  padding: 0.5em 0.5em 0 0;
  width: 100%;
  text-align: right;
`

const WindowContent = styled.div`
  padding: 1em;
  text-align: center;
`

const Heading = styled.h1`
  text-align: center;
`

const Message = styled.div`
  background-image: url(${Msg});
  background-size: 200px;
  width: 200px;
  height: 80px;
`

const Polaroid = styled.div`
  background-image: url(${polaroid});
  background-size: 300px;
  width: 300px;
  height: 350px;
`

const DraggableWindow = ({ children }) => (
  <Draggable>
    <Window>
      <WindowBar>x</WindowBar>
      <WindowContent>{children}</WindowContent>
    </Window>
  </Draggable>
)

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />
      <Draggable>
        <Polaroid>&nbsp;</Polaroid>
      </Draggable>

      <DraggableWindow>
        <Heading>Hey there, it's nice to see you here!</Heading>
      </DraggableWindow>

      <Draggable>
        <Message>&nbsp;</Message>
      </Draggable>
    </Layout>
  )
}

export default Home
