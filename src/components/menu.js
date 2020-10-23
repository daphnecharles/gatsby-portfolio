import React from "react"
import { Icon, Menu } from "semantic-ui-react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledMenu = styled(Menu)`
  &&& {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2rem;
    width: 100%;
    border: none;
    box-shadow: none;
  }
  &.ui.icon.menu .item {
    color: #272075;
    padding: 0.5rem 0.75rem 0.5rem 0.75rem;
    text-decoration: none;
    border: white 1px solid;
    margin: 0.75rem;
    background-color: white;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    border: none;
  }

  &.ui.labeled.icon.menu .item {
    flex-direction: row;
  }

  &.ui.icon.menu .item:hover {
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    color: #2cc49c;
    border: none;
    background-color: white;
    box-shadow: 2px 5px #2cc49c;
  }

  &.ui.menu .item:before {
    background: none;
  }
  p {
    padding: 0.75rem;
  }
  @media only screen and (max-width: 480px) {
    flex-wrap: wrap;

    &.ui.icon.menu .item {
      font-size: 12px;
    }
  }
`

export default function Nav() {
    return (
      <StyledMenu compact icon="labeled">
        <StyledMenu.Item
          as={Link}
          to="/"
          name="home"
          activeStyle={{ color: "#272075", boxShadow: "2px 5px #2cc49c" }}
        >
          <Icon name="home" />
          <p>Home</p>
        </StyledMenu.Item>
        <StyledMenu.Item
          as={Link}
          to="/projects"
          name="code"
          activeStyle={{ color: "#272075", boxShadow: "2px 5px #2cc49c" }}
        >
          <Icon name="code" />
          <p>Projects</p>
        </StyledMenu.Item>
        <StyledMenu.Item
          as={Link}
          to="/resume"
          name="briefcase"
          activeStyle={{ color: "##272075", boxShadow: "2px 5px #2cc49c" }}
        >
          <Icon name="briefcase" />
          <p>Resume</p>
        </StyledMenu.Item>

        {/* </StyledMenu>StyledMenu.Item
          as={Link}
          to="/blog"
          name="pencil"
          active={activeItem === "pencil"}
          onClick={this.handleItemClick}
        >
          <Icon name="pencil" />
          <p>Blog</p>
        </StyledMenu.Item> */}

        <StyledMenu.Item
          as={Link}
          to="/contact"
          name="mail"
          activeStyle={{ color: "#2cc49c", boxShadow: "2px 5px #2cc49c" }}
        >
          <Icon name="mail" />
          <p>Contact</p>
        </StyledMenu.Item>
      </StyledMenu>
    )
}
