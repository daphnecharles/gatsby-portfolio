import React from "react"
import { Card, Icon, Image, Button } from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledCard = styled(Card)`
  &&&.ui.card,
  .ui.cards > .card {
    border: none;
    border-radius: 0;
  }
  .ui.button {
    background-color: #9e97e3;
    color: white;
  }
  .ui.button:hover {
    background-color: #5a4fcf;
    color: white;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .description {
    flex-basis: 50%;
  }
  .image {
    flex-basis: 50%;
  }

  @media only screen and (max-width: 480px) {
    .image {
      display: none;
    }
    .description {
      flex-basis: 100%;
    }
  }
`

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <br />
    <Card.Group>
      <StyledCard fluid raised>
        <Card.Content>
          <Image
            src="https://uploads.codesandbox.io/uploads/user/bc2a21d8-8ea8-4b6e-b38d-3aadd72b62ca/GGr6-amex-card-application.png"
            wrapped
            ui={false}
          />

          <Card.Description>
            <h2>American Express Card Application</h2>
            <Card.Meta>
              <span className="date">December 2019</span>
            </Card.Meta>
            <p>
              Full stack web application built to allow American Express
              customers to apply for a variety of personal and business cards.
            </p>

            <h3>
              <Icon name="code" />
              Technologies Used:
            </h3>
            <p>
              Angular, React, Node.js, Styled Components, Storybook, HTML, CSS,
              JavaScript
            </p>
            <br />
            <a
              href="https://www.americanexpress.com/us/credit-cards/card-application/apply/gold-card/36182-10-0?applyAsProspect=true&pmccode=784&intlink=US-Acq-Shop-Consumer-VAC-CardMember-Apply-GoldCard#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View Project</Button>
            </a>
          </Card.Description>
        </Card.Content>
      </StyledCard>
      <StyledCard fluid raised>
        <Card.Content>
          <Image
            src="https://uploads.codesandbox.io/uploads/user/bc2a21d8-8ea8-4b6e-b38d-3aadd72b62ca/8H3G-bmw-crm-form.png"
            wrapped
            ui={false}
          />

          <Card.Description>
            <h2>BMW Australia CRM Form</h2>
            <Card.Meta>
              <span className="date">July 2019</span>
            </Card.Meta>
            <p>
              Full stack web application developed to allow BMW customers to
              book test drives, download eBrochures, and register their interest
              in upcoming models.
            </p>

            <h3>
              <Icon name="code" />
              Technologies Used:
            </h3>
            <p>
              HTML, CSS, JavaScript, Angular, Angular Material, Node.js, Visual
              Studio, Bitbucket, Sourcetree, Adobe XD
            </p>
            <br />
            <a
              href="https://content.bmw.com.au/UserFormGeneric/Index?modelRange=&lead_source=&campaign=#/form?modelRange=&lead_source=&campaign="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View Project</Button>
            </a>
          </Card.Description>
        </Card.Content>
      </StyledCard>

      <StyledCard fluid raised>
        <Card.Content>
          <Card.Description>
            <h2>Regeneron TalentHub</h2>
            <Card.Meta>
              <span className="date">August 2017</span>
            </Card.Meta>
            <p>
              A front end web application built for Regeneron's HR department.
              Enables employees to search and sort for internal classes in a
              table. Users can signup for courses through a form, which send
              thems a confirmation email.
            </p>

            <h3>
              <Icon name="code" />
              Technologies Used:
            </h3>
            <p>HTML, CSS, JavaScript, PHP, jQuery, Bootstrap, DataTables</p>
            <br />
            <a
              href="https://github.com/daphnecharles/talenthub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View Project</Button>
            </a>
          </Card.Description>
          <Image
            src="https://uploads.codesandbox.io/uploads/user/bc2a21d8-8ea8-4b6e-b38d-3aadd72b62ca/YN4N-regeneron-talenthub.png"
            wrapped
            ui={false}
          />
        </Card.Content>
      </StyledCard>
      <StyledCard fluid raised>
        <Card.Content>
          <Image
            src="https://uploads.codesandbox.io/uploads/user/bc2a21d8-8ea8-4b6e-b38d-3aadd72b62ca/w7uc-uct-connected-africa.png"
            wrapped
            ui={false}
          />

          <Card.Description>
            <h2>ConnectED Africa</h2>
            <Card.Meta>
              <span className="date">January 2018</span>
            </Card.Meta>
            <p>
              A WordPress website built for University of Cape Town's
              Information Systems department during my USAID Research and
              Innovation fellowship. Informational website for the organization
              ConnectED Africa.
            </p>

            <h3>
              <Icon name="code" />
              Technologies Used:
            </h3>
            <p>WordPress, Astra Child Theme, Elementor, MailChimp</p>
            <br />
            <a
              href="http://connectedafrica.org.za/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View Project</Button>
            </a>
          </Card.Description>
        </Card.Content>
      </StyledCard>
      <StyledCard fluid raised>
        <Card.Content>
          <Card.Description>
            <h2>CACC Portal</h2>
            <Card.Meta>
              <span className="date">June 2017</span>
            </Card.Meta>
            <p>
              A front end web application built for Rutgers University's
              computing services team. Enables users to view an access a variety
              of tools they need to complete tasks throughout their day.
              Integrates with Slack and Twitter.
            </p>
            <h3>
              <Icon name="code" />
              Technologies Used:
            </h3>
            <p>HTML, CSS, JavaScript, PHP, Twitter API, Slack API</p>
            <br />
            <a
              href="https://github.com/daphnecharles/caccportal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View Project</Button>
            </a>
          </Card.Description>
          <Image
            src="https://uploads.codesandbox.io/uploads/user/bc2a21d8-8ea8-4b6e-b38d-3aadd72b62ca/9l-R-rutgers-cacc-portal.png"
            wrapped
            ui={false}
          />
        </Card.Content>
      </StyledCard>
      <StyledCard fluid raised>
        <Card.Content>
          <Image
            src="https://uploads.codesandbox.io/uploads/user/bc2a21d8-8ea8-4b6e-b38d-3aadd72b62ca/lt5P-wanderlust-map.png"
            wrapped
            ui={false}
          />

          <Card.Description>
            <h2>Wanderlust Atlas</h2>
            <Card.Meta>
              <span className="date">January 2018</span>
            </Card.Meta>
            <p>
              A front end web application built as my final project for my
              Advanced Web Design course at Rutgers University. Enables users to
              click on a map and view tweets and instagram posts from that
              location.
            </p>
            <h3>
              <Icon name="code" />
              Technologies Used:
            </h3>
            <p>
              HTML, CSS, JavaScript, Bootstrap, AJAX, JSON, Google Maps API,
              Twitter API, Instagram API
            </p>
            <br />
            <a
              href="https://github.com/daphnecharles/wanderlust-atlas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View Project</Button>
            </a>
          </Card.Description>
        </Card.Content>
      </StyledCard>
    </Card.Group>
  </Layout>
)

export default SecondPage
