import React, { useContext } from "react"
import styled from "styled-components"
import Draggable from "react-draggable"
import { ObjectContext } from "../context/objects"

const Heading = styled.h1`
  color: white;
  text-align: center;
  font-weight: normal;
`

const WindowContainer = styled.div`
  position: relative;
  z-index: ${props => (props.zIndex ? props.zIndex : 0)};
  width: 550px;
`

const WindowPane = styled.div`
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
  const { state, dispatch } = useContext(ObjectContext)

  // dispatch a new message which will calculate
  // the new z-index value for this component
  const moveToFront = () => {
    dispatch({ type: "window" })
  }

  return (
    <Draggable onDrag={moveToFront}>
      <WindowContainer zIndex={state.window}>
        <WindowPane>
          <WindowBar>x</WindowBar>
          <WindowContent>
            <Heading>Hey there, it's nice to see you here!</Heading>
          </WindowContent>
        </WindowPane>
      </WindowContainer>
    </Draggable>
  )
}

export default Window
