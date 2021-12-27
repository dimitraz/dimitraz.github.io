import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Draggable from "react-draggable"

const GlassWindow = styled.div`
  position: relative;
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

  return (
    <Draggable>
      <GlassWindow bg={stainedGlass} />
    </Draggable>
  )
}

export default Glass
