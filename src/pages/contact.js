import React from "react"
import { Button, Form } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const ContactWrapper = styled.section`
  .ui.form {
    width: 75%;
    margin: 0 auto;
  }
  .ui.button {
    background-color: #9e97e3;
    color: white;
  }
  .ui.button:hover {
    background-color: #5a4fcf;
    color: white;
  }

  h3 {
    color: rgba(0, 0, 0, 0.68);
  }
`

const ContactPage = () => (
  <Layout>
    <ContactWrapper>
      <SEO title="Contact" />
      <h1>Contact</h1>
      <h3>
        Got questions? Hiring a developer? Want to collaborate? <br />
        Drop me a line, I'd love to chat with you.
      </h3>
      <br />
      <Form
        name="contact"
        method="post"
        data-netlify="true"
        netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <Form.Field>
          <label htmlFor="name">Name</label>
          <input name="name" placeholder="name" id="name" required />
        </Form.Field>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="email" id="email" required />
        </Form.Field>
        <Form.Field>
          <Form.TextArea
            name="message"
            label="Message"
            placeholder="Tell me more..."
            required
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </ContactWrapper>
  </Layout>
)

export default ContactPage
