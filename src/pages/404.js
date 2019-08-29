import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not  | Daphne Charles" />
    <h1>PAGE NOT FOUND</h1>
    <p>You just navigated to a page that doesn't exist. Oopsies!</p>
    <Link to="/">Click here to head home.</Link>
  </Layout>
)

export default NotFoundPage
