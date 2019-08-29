import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Button, Icon } from "semantic-ui-react"

const ResumeWrapper = styled.section`
  .ui.button {
    background-color: #9e97e3;
    color: white;
  }
  .ui.button:hover {
    background-color: #5a4fcf;
    color: white;
  }
`

const ResumePage = () => (
  <Layout>
    <ResumeWrapper>
      <SEO title="Resume" />
      <h1>Resume</h1>
      <br />
      <a href="https://raw.githubusercontent.com/daphnecharles/resume/master/Daphne-Charles-CV-Resume-2019.pdf">
        <Button className="resume-buttons" icon labelPosition="left">
          <Icon name="file pdf" />
          Download as PDF
        </Button>
      </a>{" "}
      <a href="https://raw.githubusercontent.com/daphnecharles/resume/master/Daphne-Charles-CV-Resume-2019.docx">
        <Button className="resume-buttons" icon labelPosition="left">
          <Icon name="file word" />
          Download as DOCX
        </Button>
      </a>
      <br />
      <br />
      <iframe
        title="resume"
        className="resume-iframe"
        width="900"
        height="1100"
        src="https://docs.google.com/gview?url=https://github.com/daphnecharles/resume/raw/master/Daphne-Charles-CV-Resume-2019.pdf&embedded=true"
      />
      {/*  <Card.Group>
        <Card fluid>
          <Card.Content>
            <h2>
              <Icon size="large" name="briefcase" />
              Skills
            </h2>
          </Card.Content>
          <Card.Content>
            <Icon size="huge" name="js" />
            JavaScript
            <Icon size="huge" name="html5" />
            HTML
            <Icon size="huge" name="css3" />
            CSS
            <Icon size="huge" name="react" />
            React
            <Icon size="huge" name="angular" />
            Angular
            <Icon size="huge" name="node" />
            NodeJS
            <Icon size="huge" name="sass" />
            Sass
            <Icon size="huge" name="github" />
            Git
            <Icon size="huge" name="npm" />
            npm
            <Icon size="huge" name="google" />
            Gatsby
            <Icon size="huge" name="code" />
            GraphQL
          </Card.Content>
        </Card>
        <Card fluid>
          <Card.Content>
            <h2>
              <Icon size="large" name="briefcase" />
              Work
            </h2>
          </Card.Content>
          <Card.Content>
            <img
              src="public/regeneron-logo-113x75.png"
              alt="regeneron logo"
              height="42"
              width="42"
            />
          </Card.Content>
        </Card>
      </Card.Group> */}
    </ResumeWrapper>
  </Layout>
)

export default ResumePage
