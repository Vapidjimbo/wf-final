import NextHead from './components/Head'
//import styles from "../styles/Home.module.css";
//import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <NextHead/>
      <Container fluid>
        <body>
          <Header />
          <main>
            
          </main>
          <Footer />
        </body>
      </Container>
    </>
  );
}
