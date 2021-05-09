import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default function Footer() {
  return (
    <footer className="position-absolute top-100 start-50 translate-middle w-100 p-3 text-center">
        <Row>
          <Col>Site Info</Col>
          <Col>Links</Col>
          <Col>Social Media</Col>
        </Row>
    </footer>
  );
}
