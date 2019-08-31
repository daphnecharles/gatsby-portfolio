import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import "semantic-ui-css/semantic.min.css"



const IndexWrapper = styled.div`
  background-image: linear-gradient(#5a4fcf, #9e97e3, #bfbbed, #ffffff);
  text-align: center;
  color: white;
  max-width: 100%;

  height: 100vh;
  a {
    color: white;
  }

  h1 {
    margin-top: 5rem;
    font-size: 50px;
    text-shadow: 1px 1px #5a4fcf;
  }
  h2 {
    font-size: 40px;
    text-shadow: 1px 1px #5a4fcf;
  }

  @media only screen and (max-width: 480px) {
    h1 {
      margin-top: 1rem;
    }
  }
`

const StyledSocial = styled(SocialHeader)`
  width: 100%;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          subtitle
          description
        }
      }
    }
  `)
  return (
    <IndexWrapper>
      <SEO title="Home" />
      <Menu />
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>{data.site.siteMetadata.subtitle}</h2>
      <StyledSocial />
    </IndexWrapper>
  )
}

export default IndexPage
