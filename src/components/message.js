import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Bubble = styled.div`
  position: relative;
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
  return <Bubble bg={bubble} />
}

export default Message
