import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <Link to="#" style={{ float: `left` }}>
        Home
      </Link>
      © Daphne Charles {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
      <Link to="#" style={{ float: `right` }}>
        Go to top
      </Link>
    </footer>
  )
}

export default Footer
