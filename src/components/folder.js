import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby-link"
import Draggable from "react-draggable"

const Item = styled.div`
  position: relative;
  text-decoration: none;
  padding-bottom: 2em;
  width: 65px;
  text-align: center;
  cursor: move;

  &:active {
    > .itemText {
      background: lightblue;
    }
  }
`

const Icon = styled.div`
  width: 65px;
  height: 50px;
  background-image: url(${props => (props.bg ? props.bg : "")});
`

const Text = styled.span`
  border: 1px dotted;
  font-family: monospace;
  background: ${props => (props.isActive ? "lightblue" : "none")};
`

const Folder = ({ isActive, text, path }) => {
  const data = useStaticQuery(graphql`
    query {
      folder: file(base: { eq: "folder.png" }) {
        childImageSharp {
          fixed(width: 65, height: 50, quality: 95) {
            src
          }
        }
      }
    }
  `)
  const folder = data?.folder?.childImageSharp?.fixed.src
  return (
    <Draggable>
      <Item onDoubleClick={e => navigate(path)}>
        <Icon bg={folder} />
        <Text isActive={isActive}>{text}</Text>
      </Item>
    </Draggable>
  )
}

export default Folder
