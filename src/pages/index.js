import React from "react"
import Header from "../components/header"
import SEO from "../components/seo"
import "semantic-ui-css/semantic.min.css"

/* const IndexWrapper = styled.section`
  margin: 5rem 5rem;

  div {
    max-width: 300px;
    margin: 0 auto;
    display: block;
  }
` */

const IndexPage = () => (
  <div>
    <Header />

    <SEO title="Home" />

    {/*  <Image />

      <h1>About Me</h1>
      <p>
        I'm a passionate front-end web developer originally from New York City.
        <br />I enjoy participating in local hackathons and learning new things
        at tech conferences around the world.
      </p>
      <p>
        In my free time, I love to travel. Interact with the map below to learn
        countries and participating in tech conferences and hackathons.
      </p>
      <p>I speak English and conversational Spanish. </p> */}
  </div>
)

export default IndexPage
