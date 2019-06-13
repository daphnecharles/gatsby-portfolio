import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "../styles/header.module.css"

const Header = ({ siteTitle, subTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.div}>
      <h1>
        <Link className={headerStyles.h1} to="/">
          {siteTitle}
        </Link>
      </h1>
      <h2>{subTitle}</h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
