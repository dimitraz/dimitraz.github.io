import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { navigate } from "gatsby-link"
import Draggable from "react-draggable"

const Item = styled.div`
  position: relative;
  text-decoration: none;
  padding-bottom: 2em;
  width: 75px;
  text-align: center;
  cursor: move;

  &:active {
    > .itemText {
      background: lightblue;
    }
  }
`

const Icon = styled.div`
  width: 75px;
  height: 60px;
  background-image: url(${props => (props.bg ? props.bg : "")});
`

const Text = styled.span`
  border: 1px dotted;
  font-family: monospace;
  background: ${props => (props.isActive ? "lightblue" : "none")};
`

const Folder = ({ isActive, iconType, text, path }) => {
  const data = useStaticQuery(graphql`
    query {
      folder: file(base: { eq: "folder2.png" }) {
        childImageSharp {
          fixed(width: 75, height: 60, quality: 95) {
            src
          }
        }
      }
      web: file(base: { eq: "world.png" }) {
        childImageSharp {
          fixed(width: 75, height: 60, quality: 95) {
            src
          }
        }
      }
      cat: file(base: { eq: "cat2.gif" }) {
        childImageSharp {
          fixed(width: 75, height: 60, quality: 95) {
            src
          }
        }
      }
      page: file(base: { eq: "page.png" }) {
        childImageSharp {
          fixed(width: 75, height: 60, quality: 95) {
            src
          }
        }
      }
      cd: file(base: { eq: "cd.png" }) {
        childImageSharp {
          fixed(width: 75, height: 60, quality: 95) {
            src
          }
        }
      }
    }
  `)

  let folder
  if (iconType === "folder2") {
    folder = data?.folder?.childImageSharp?.fixed.src
  } else if (iconType === "cat2") {
    folder = data?.cat?.childImageSharp?.fixed.src
  } else if (iconType === "cd") {
    folder = data?.cd?.childImageSharp?.fixed.src
  } else if (iconType === "page") {
    folder = data?.page?.childImageSharp?.fixed.src
  } else if (iconType === "world") {
    folder = data?.web?.childImageSharp?.fixed.src
  }

  // const folder = data?.folder?.childImageSharp?.fixed.src

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
