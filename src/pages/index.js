import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import "semantic-ui-css/semantic.min.css"
import SocialHeader from "../components/socialheader"
import Menu from "../components/menu"
import Particles from "react-particles-js"

const IndexWrapper = styled.div`
  background-image: linear-gradient(#5a4fcf, #9e97e3, #bfbbed, #ffffff);
  text-align: center;
  color: white;
  max-width: 100%;
  height: 100vh;

  .particle-wrapper {
  }
  .particle-canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
  }
  .index-content {
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
  }

  a {
    color: white;
  }

  h1 {
    margin-top: 3rem;
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
      <Particles
        className="particle-wrapper"
        canvasClassName="particle-canvas"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <SEO title="Home" />
      <div className="index-content">
        <Menu />
        <h1>{data.site.siteMetadata.title}</h1>
        <h2>{data.site.siteMetadata.subtitle}</h2>
        <SocialHeader />
      </div>
    </IndexWrapper>
  )
}

export default IndexPage
