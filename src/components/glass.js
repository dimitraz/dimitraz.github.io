import React, { useContext } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Draggable from "react-draggable"
import { ObjectContext } from "../context/objects"

const GlassWindow = styled.div`
  position: relative;
  z-index: ${props => (props.zIndex ? props.zIndex : 0)};
  margin: auto;
  margin-bottom: 1em;
  height: 317px;
  width: 600px;
  background-image: url(${props => (props.bg ? props.bg : "")});
  background-size: 600px;
  cursor: move;
`

const Glass = () => {
  const data = useStaticQuery(graphql`
    query {
      stainedGlass: file(base: { eq: "stained-glass.png" }) {
        childImageSharp {
          fixed(width: 600, height: 317, quality: 95) {
            src
          }
        }
      }
    }
  `)
  const stainedGlass = data?.stainedGlass?.childImageSharp?.fixed.src
  const { state, dispatch } = useContext(ObjectContext)

  // dispatch a new message which will calculate
  // the new z-index value for this component
  const moveToFront = () => {
    dispatch({ type: "glass" })
  }

  return (
    <Draggable onDrag={moveToFront}>
      <GlassWindow bg={stainedGlass} zIndex={state.glass} />
    </Draggable>
  )
}

export default Glass
