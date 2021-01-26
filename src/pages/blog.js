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
  padding: 0;
`

const ListItem = styled.li`
  padding: 0 0 2em 0;
  margin: 0;
`

const ListItemLink = styled(Link)`
  text-decoration: none;
`

const Header = styled.section`
  display: grid;
  grid-template-columns: 10% 75%;
  align-items: center;
`

const Heading = styled.h1`
  padding: 0;
  margin: 0;
`

const Date = styled.small`
  font-family: monospace;
`

const Thumbnail = styled(Img)`
  margin: 2em 0;
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
              <Header>
                <Date>{post.frontmatter.date}</Date>
                <Heading>
                  <ListItemLink to={post.fields.slug} itemProp="url">
                    {title}
                  </ListItemLink>
                </Heading>
              </Header>

              {thumbnail && (
                <Thumbnail fluid={thumbnail.childImageSharp.fluid} />
              )}
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
          date(formatString: "DD MMMM YYYY")
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
