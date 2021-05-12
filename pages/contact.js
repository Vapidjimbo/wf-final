import Page from "./components/Page";
import { useForm, ValidationError } from "@formspree/react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

// Contact Page

export default function Contact() {
  // Form Spree Post 
  const [state, handleSubmit] = useForm("xgerojgb"); 
  if (state.succeeded) {
    return (
      <>
        <Page>
          <div className="min-vh-100 m-6 p-6 d-flex justify-content-center">
            <p>
              Thank you for your message! We will be in contact with you soon.
            </p>
          </div>
        </Page>
      </>
    );
  }
  return (
    <Page>
      {/* Header Section */}
      <Jumbotron className="mb-1 bg-light bg-gradient" fluid>
        <Container className="text-center">
          <h2>Contact Us</h2>
          <p className="px-5">
            Shoot us a message if you're interested in learning more!
          </p>
        </Container>
      </Jumbotron>
      {/* Form */}
      <section className="mx-5">
        <h2 className="text-center bg-dark bg-gradient text-white">Contact Form</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="m-6" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <InputGroup>
            <FormControl
              placeholder="Project Type"
              aria-label="Project Type"
              aria-describedby="basic-addon1"
              id="projectType"
              name="projectType"
            />

            <DropdownButton
              as={InputGroup.Append}
              variant="outline-secondary"
              title="Dropdown"
              
            >
              <Dropdown.Item href="#">Web Development</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Mobile Development</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Desktop Development</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Other</Dropdown.Item>
            </DropdownButton>
          </InputGroup>
          <ValidationError
            prefix="ProjectType"
            field="projectType"
            errors={state.errors}
          />

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Project Description</Form.Label>
            <Form.Control id="message" name="message" as="textarea" rows={3} />
          </Form.Group>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <Button variant="primary" type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </Form>
      </section>
    </Page>
  );
}
