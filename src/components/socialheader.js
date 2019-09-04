import React from "react"
import styled from "styled-components"
import { Icon } from "semantic-ui-react"
import { Link } from "gatsby"

const StyledSocial = styled.div`
  margin-top: 4rem;
  .icon {
    margin: 1rem 0.75rem;
  }
  i.bordered.inverted.icon {
    color: #272075 !important;
    background-color: white !important;
  }
  i.bordered.inverted.icon:hover {
    color: #272075 !important;
  }
  .icon:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.3);
  }
`

const SocialHeader = () => (
  <StyledSocial>
    <a
      href="https://github.com/daphnecharles"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon bordered circular inverted size="big" name="github" />
    </a>
    <a
      href="https://www.linkedin.com/in/daphneacharles/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon bordered circular inverted size="big" name="linkedin" />
    </a>
    <a
      href="https://twitter.com/Daphachar"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon bordered circular inverted size="big" name="twitter" />
    </a>
    <Link to="/contact" rel="noopener noreferrer">
      <Icon bordered circular inverted size="big" name="mail outline" />
    </Link>
  </StyledSocial>
)

export default SocialHeader
