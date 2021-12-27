import React from "react"

import Layout from "../components/layout"
import Glass from "../components/glass"
import Message from "../components/message"
import Window from "../components/window"
import SEO from "../components/seo"

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />

      <Glass />
      <Window />
      <Message />
    </Layout>
  )
}

export default Home
