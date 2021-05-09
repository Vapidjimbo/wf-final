import Page from "./components/Page";
import { useForm, ValidationError } from "@formspree/react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Contact() {
  const [state, handleSubmit] = useForm("xgerojgb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <Page>
      <section className="m-5 p-5">
        <h2 className="text-center">Contact Us!</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
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
