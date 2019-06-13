import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, margin: `0 auto`, display: `block` }}>
      <Image />
    </div>
    <h2>Hello world, my name is Daphne!</h2>
    <p>
      I'm a passionate front-end web developer originally from New York City.
    </p>
    <p>
      In my free time, I enjoy traveling to new countries and participating in
      tech conferences and hackathons.
    </p>
    <p>I speak English and conversational Spanish.</p>
  </Layout>
)

export default IndexPage
