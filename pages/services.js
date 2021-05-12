import Page from "./components/Page";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Figure from "react-bootstrap/Figure";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";

//Services Page

export default function Services() {
  return (
    <Page>
      {/* Header */}
      <Jumbotron className="mb-1 bg-light bg-gradient" fluid>
        <Container className="text-center">
          <h2>Services</h2>
          <p className="px-5">
            We are willing to tackle any project but our bread and butter is
            shown off below.
          </p>
        </Container>
      </Jumbotron>
      {/* Services Dropdown  */}
      <section className="mx-5">
        <h2 className="text-center bg-dark bg-gradient text-white">
          Main Services
        </h2>
        <Accordion defaultActiveKey="0">
          {/* Web */}
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Web Development
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Figure className="d-flex justify-content-center">
                  <div>
                    <Figure.Image
                      width={342}
                      height={180}
                      alt="171x180"
                      src="https://images.pexels.com/photos/3888149/pexels-photo-3888149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    />
                  </div>
                </Figure>
                <ListGroup>
                  <ListGroup.Item className="text-center">
                    <h3>Web Development</h3>
                    <p>If you need a website, we can make it.</p>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-center">
                    <h3>Web Design</h3>
                    <p>
                      We work with you to design the blueprint of you website.
                      Fonts, colors, images, etc.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-center">
                    <h3>Backend Development and Hosting</h3>
                    <p>Need a server or database? we got you covered!</p>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-center bg-dark bg-gradient text-white">
                    Don't see your web project above? Click the contact button
                    below and shoot us a message to see if we can help.
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-center">
                    <Button variant="outline-primary" href="/contact">
                      Contact Us
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          {/* Mobile */}
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Mobile Development
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Figure className="d-flex justify-content-center">
                  <div>
                    <Figure.Image
                      width={342}
                      height={180}
                      alt="171x180"
                      src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                  </div>
                </Figure>
                <ListGroup>
                  <ListGroup.Item className="text-center">
                    <h3>Mobile Development</h3>
                    <p>If you need an app, we can make it.</p>
                    <p>
                      We use the same technologies as we do to make websites,
                      and it can work on any device.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-center bg-dark bg-gradient text-white">
                    Don't see your web project above? Click the contact button
                    below and shoot us a message to see if we can help.
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-center">
                    <Button variant="outline-primary" href="/contact">
                      Contact Us
                    </Button>{" "}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          {/* Desktop */}
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Desktop Development
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Figure className="d-flex justify-content-center">
                  <div>
                    <Figure.Image
                      width={342}
                      height={"auto"}
                      alt="171x180"
                      src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    />
                  </div>
                </Figure>
                <ListGroup>
                  <ListGroup.Item className="text-center">
                    <h3>Desktop Development</h3>
                    <p>If you need a desktop app, we can make it.</p>
                    <p>
                      We use the same technologies as we do to make websites,
                      and it can work on any OS.
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-center bg-dark bg-gradient text-white">
                    Don't see your web project above? Click the contact button
                    below and shoot us a message to see if we can help.
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-center">
                    <Button variant="outline-primary" href="/contact">
                      Contact Us
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </section>
    </Page>
  );
}
