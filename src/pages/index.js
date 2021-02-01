import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Draggable from "react-draggable"
import styled from "styled-components"
import message from "../../content/assets/bubble.png"
import glass from "../../content/assets/stained-glass.png"

const Window = styled.div`
  position: relative;
  max-width: 550px;
  left: -5em;
  top: -2em;
  margin: auto;
  background: black;
  color: white;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2));
  user-select: none;
  cursor: move;
`

const WindowBar = styled.div`
  width: 100%;
  padding: 0.5em 0.5em 0 0;
  text-align: right;
`

const WindowContent = styled.div`
  padding: 1em;
  text-align: center;
`

const Heading = styled.h1`
  color: white;
  text-align: center;
`

const Message = styled.div`
  position: relative;
  width: 500px;
  height: 53px;
  left: 30em;
  top: -25em;
  background-image: url(${message});
  background-size: 500px;
  cursor: move;
`

const GlassWindow = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 1em;
  width: 600px;
  height: 286px;
  background-image: url(${glass});
  background-size: 600px;
  cursor: move;
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
        <GlassWindow>&nbsp;</GlassWindow>
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
