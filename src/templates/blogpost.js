import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import SEO from "../components/seo"

class BlogPost extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <SEO title={post.title} />
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <h5 dangerouslySetInnerHTML={{ __html: post.date }} />
        <img
          src={post.jetpack_featured_media_url}
          alt="featured blog post"
          height="600"
          width="900"
        />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default BlogPost

export const postQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      jetpack_featured_media_url
      date(formatString: "MMMM D, YYYY")
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
