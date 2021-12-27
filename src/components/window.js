import React from "react"
import styled from "styled-components"
import Draggable from "react-draggable"

const Heading = styled.h1`
  color: white;
  text-align: center;
  font-weight: normal;
`

const WindowPane = styled.div`
  position: relative;
  width: 550px;
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

const Window = () => {
  return (
    <Draggable>
      <div>
        <WindowPane>
          <WindowBar>x</WindowBar>
          <WindowContent>
            <Heading>Hey there, it's nice to see you here!</Heading>
          </WindowContent>
        </WindowPane>
      </div>
    </Draggable>
  )
}

export default Window
