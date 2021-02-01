import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { useContext } from "../components/store/storeHelpers"
import { SansSerifStack } from "../components/layout"

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
  padding: 0 0 4em 0;
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
  ${SansSerifStack};
  padding: 0;
  margin: 0;
`

const Date = styled.small`
  font-family: monospace;
`

const Photos = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const { updateTheme } = useContext()

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

          return (
            <ListItem key={post.fields.slug}>
              <Header>
                <Date>{post.frontmatter.date}</Date>
                <Heading>
                  <ListItemLink
                    to={post.fields.slug}
                    itemProp="url"
                    onMouseLeave={() => updateTheme()}
                    onClick={() => updateTheme()}
                    onMouseEnter={() =>
                      updateTheme(thumbnail.publicURL, "white")
                    }
                  >
                    {title}
                  </ListItemLink>
                </Heading>
              </Header>
            </ListItem>
          )
        })}
      </List>
    </Layout>
  )
}

export default Photos

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "photo" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMM YYYY")
          title
          description
          thumbnail {
            publicURL
          }
        }
      }
    }
  }
`
