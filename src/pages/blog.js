import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Card, Image } from "semantic-ui-react"
import styled from "styled-components"

const BlogWrapper = styled.section`
  .ui.card {
    margin: 1rem 1rem;
  }
`

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
      allWordpressPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            excerpt
            date(formatString: "MMMM D, YYYY")
            slug
            jetpack_featured_media_url
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <BlogWrapper>
        <SEO title="Page two" />
        <h1>Blog</h1>
        <Card.Group>
          {data.allWordpressPost.edges.map(edge => {
            return (
              <div key={edge.node.title}>
                <Card>
                  <Image
                    wrapped
                    ui={false}
                    src={edge.node.jetpack_featured_media_url}
                    alt={edge.node.title}
                  />
                  <Card.Content>
                    <Card.Header
                      dangerouslySetInnerHTML={{ __html: edge.node.title }}
                    />
                    <Card.Meta>
                      <span className="date">{edge.node.date}</span>
                    </Card.Meta>
                    <Card.Description
                      dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}
                    >
                      {}
                    </Card.Description>
                    <Button>
                      <Link to={`/blog/${edge.node.slug}`}>Read more</Link>
                    </Button>
                  </Card.Content>
                </Card>
              </div>
            )
          })}
        </Card.Group>
      </BlogWrapper>
    </Layout>
  )
}

export default BlogPage
