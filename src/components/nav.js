import { Link } from "gatsby"
import React from "react"
import navStyles from "../styles/nav.module.css"

const Nav = () => (
  <nav className={navStyles.nav}>
    <Link className={navStyles.link} to="/about/">
      About
    </Link>
    <Link className={navStyles.link} to="/resume/">
      Resume
    </Link>
    <Link className={navStyles.link} to="/projects/">
      Projects
    </Link>
    <Link className={navStyles.link} to="/contact/">
      Contact
    </Link>
  </nav>
)

export default Nav
