import React, { Component } from "react"
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
    color: #272075;
    border: none;
    background-color: white;
    box-shadow: 2px 5px #272075;
  }
  &.ui.icon.menu .item:hover:active {
    text-decoration: none;
    color: #272075;
    border: none;
    background-color: white;
    box-shadow: 2px 5px #272075;
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

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <StyledMenu compact icon="labeled">
        <StyledMenu.Item
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Icon name="home" />
          <p>Home</p>
        </StyledMenu.Item>
        <StyledMenu.Item
          as={Link}
          to="/projects"
          name="code"
          active={activeItem === "code"}
          onClick={this.handleItemClick}
        >
          <Icon name="code" />
          <p>Projects</p>
        </StyledMenu.Item>
        <StyledMenu.Item
          as={Link}
          to="/resume"
          name="briefcase"
          active={activeItem === "briefcase"}
          onClick={this.handleItemClick}
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
          active={activeItem === "mail"}
          onClick={this.handleItemClick}
        >
          <Icon name="mail" />
          <p>Contact</p>
        </StyledMenu.Item>
      </StyledMenu>
    )
  }
}
