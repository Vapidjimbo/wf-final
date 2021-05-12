import Page from "./components/Page";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

//Home Page

export default function Home() {
  return (
    <>
      <Page>
        {/* Header */}
        <Jumbotron fluid className="mb-1 bg-light bg-gradient">
          <Container className="text-center">
            <h2>Welcome to Best Devs Ever!</h2>
            <p className="px-5">
              We are a group of experienced developers ready to help you bring
              your project idea to life. From web, app, and game development to
              graphic design. We do it all!
            </p>
            <Button variant="outline-primary" href="/contact">
              Contact Us
            </Button>
          </Container>
        </Jumbotron>
        {/* Services */}
        <section className="mx-5">
          <h2 className="text-center bg-dark bg-gradient text-white">
            Services
          </h2>
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-window"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                    <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z" />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Web Design and Development</Card.Title>
                  <Card.Text>
                    We can bring your website design to life, build your small
                    business a website and teach how to maintain it. We also
                    offer continued website support.
                  </Card.Text>
                  <Button variant="outline-primary" href="/services">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-phone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Hybrid Mobile Development</Card.Title>
                  <Card.Text>
                    Already have a website but need a mobile app as well? We got
                    you covered. We can make an app that works on Android and
                    IOS, all with one source code.
                  </Card.Text>
                  <Button variant="outline-primary" href="/services">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-laptop"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                  </svg>
                </Card.Header>
                <Card.Body>
                  <Card.Title>Hybrid Desktop Development</Card.Title>
                  <Card.Text>
                    Need a custom desktop application for your business? We got
                    you covered. Our apps will work on any OS and will all come
                    from one source code.
                  </Card.Text>
                  <Button variant="outline-primary" href="/services">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        {/* Portfolio  */}
        <section className="mx-5">
          <h2 className="text-center text-white bg-dark bg-gradient">
            Recent Projects
          </h2>
          <Carousel className="w-75 m-auto border border-5 rounded">
            <Carousel.Item>
              <img
                className="d-block w-100 m-auto"
                src="https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Project 1</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 m-auto"
                src="https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Project 2</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 m-auto"
                src="https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Project 3</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
      </Page>
    </>
  );
}
