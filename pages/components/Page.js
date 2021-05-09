import NextHead from "./PageChildren/Head";
//import styles from "../styles/Home.module.css";
//import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./PageChildren/Header";
import Footer from "./PageChildren/Footer";
import React from "react";
import ReactDOM from "react-dom";

export default function Page({ children }) {
  let items = React.Children.toArray(children);
  console.log(items);
  return (
    <>
      <NextHead />
      <Container fluid>
        <Header />
        <main>
            {items.map((item) => (
              <span key={item.key}>{item}</span>
            ))}
        </main>
        <Footer />
      </Container>
    </>
  );
}
