import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.section`
  width: 75%;
  margin-left: 10%;

  span {
    max-width: 100% !important;
    margin-bottom: 1em;
  }
`

const Content = styled.section`
  line-height: 1.5;
  font-family: Graphik;
`

const Header = styled.header`
  margin-bottom: 2em;
`

const Navigation = styled.nav`
  margin-top: 3em;
`

const Heading = styled.h1`
  padding: 0;
  margin: 0;
  font-family: Graphik;
`

const Date = styled.small`
  font-family: monospace;
`

const NavLink = styled(Link)`
  text-decoration: none;
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Container>
        <Header>
          <Heading itemProp="headline">{post.frontmatter.title}</Heading>
          <Date>{post.frontmatter.date}</Date>
        </Header>

        <Content dangerouslySetInnerHTML={{ __html: post.html }} />

        <Navigation>
          {previous && (
            <NavLink to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title} &nbsp;
            </NavLink>
          )}
          {next && (
            <NavLink to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </NavLink>
          )}
        </Navigation>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
