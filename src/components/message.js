import React, { useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Draggable from "react-draggable"
import { ObjectContext } from "../context/objects"

const Bubble = styled.div`
  position: relative;
  z-index: ${props => (props.zIndex ? props.zIndex : 0)};
  width: 500px;
  height: 53px;
  left: 30em;
  top: -25em;
  background-image: url(${props => (props.bg ? props.bg : "")});
  background-size: 500px;
  cursor: move;
`

const Message = () => {
  const data = useStaticQuery(graphql`
    query {
      bubble: file(base: { eq: "bubble.png" }) {
        childImageSharp {
          fixed(width: 500, height: 53, quality: 95) {
            src
          }
        }
      }
    }
  `)
  const bubble = data?.bubble?.childImageSharp?.fixed.src
  const { state, dispatch } = useContext(ObjectContext)

  // dispatch a new message which will calculate
  // the new z-index value for this component
  const moveToFront = () => {
    dispatch({ type: "message" })
  }

  return (
    <Draggable onDrag={moveToFront}>
      <Bubble bg={bubble} zIndex={state.message} />
    </Draggable>
  )
}

export default Message
