import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Social from "./social"

const StyledFooter = styled.footer`
  margin-top: 3rem;
  background-color: #9e97e3;
  max-width: 100%;
  padding: 1.45rem 1.0875rem;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .home-link,
  .top-link {
    align-self: center;
  }
  div {
    margin: 1rem 2rem;
  }

  a {
    color: white;
  }

  a:hover {
    text-decoration: none;
    color: skyblue;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <StyledFooter>
      <div className="home-link" />
      <div className="social-link">
        <Social />© {data.site.siteMetadata.author} {new Date().getFullYear()}
      </div>
      <div className="top-link">{/* <Link to="#top">Go to top</Link> */}</div>
    </StyledFooter>
  )
}

export default Footer
