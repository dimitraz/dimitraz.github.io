import React from "react"
import Layout from "../components/layout"

import Glass from "../components/glass"
import Message from "../components/message"
import Window from "../components/window"

import SEO from "../components/seo"
import Draggable from "react-draggable"

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />

      <Draggable>
        <div>
          <Glass />
        </div>
      </Draggable>

      <Draggable>
        <div>
          <Window />
        </div>
      </Draggable>

      <Draggable>
        <div>
          <Message />
        </div>
      </Draggable>
    </Layout>
  )
}

export default Home
