import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { useThemeContext } from "../context/helpers"
import { SansSerifStack } from "../components/layout"

const Grid = styled.div`
  display: grid;
  grid-template-columns: 10% 75%;
  align-items: center;
`

const Container = styled.section`
  ${SansSerifStack}
  padding: 0;
  margin: 0;
`

const Description = styled(Container)`
  margin-bottom: 4em;
  line-height: 1.5;
`

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  padding: 0 0 3em 0;
  margin: 0;
`

const ListItemLink = styled(Link)`
  text-decoration: none;
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
  const { updateTheme } = useThemeContext()

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Grid>
          <Container></Container>
          <Container>No blog posts to display</Container>
        </Grid>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />

      <Grid>
        <Container></Container>

        <Description>
          Sometimes I take photos.. This is a photo diary of film pictures taken
          on some of my various analogue cameras.
        </Description>
      </Grid>

      <List>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const thumbnail = post.frontmatter.thumbnail

          return (
            <ListItem key={post.fields.slug}>
              <Grid>
                <Date>{post.frontmatter.date}</Date>
                <Container>
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
                </Container>
              </Grid>
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
