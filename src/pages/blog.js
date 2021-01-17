import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Container = styled.section`
  padding: 0;
  margin: 0;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
`

const ListItem = styled.li`
  color: blue;
  padding: 0;
  margin: 0;
`

const Header = styled.section``
const Heading = styled.h1`
  padding: 0;
  margin: 0;
`

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Container>No blog posts to display</Container>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <List>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const thumbnail = post.frontmatter.thumbnail
          console.log(thumbnail)

          return (
            <ListItem key={post.fields.slug}>
              {thumbnail && <Img fluid={thumbnail.childImageSharp.fluid} />}

              <Header>
                <Heading>
                  <Link to={post.fields.slug} itemProp="url">
                    {title}
                  </Link>
                </Heading>
                <small>{post.frontmatter.date}</small>
              </Header>

              <Container
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
                itemProp="description"
              />
            </ListItem>
          )
        })}
      </List>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
