import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Form Submittted!</h1>
    <p>
      Thank you for getting in contact with me. I will get back to you shortly.
    </p>
    <Link to="/">Click here to head home.</Link>
  </Layout>
)

export default SuccessPage
