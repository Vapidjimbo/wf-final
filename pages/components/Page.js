import NextHead from "./PageChildren/Head";
import Container from "react-bootstrap/Container";
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
      <Container fluid className="m-auto">
        <Header />
        <main className="border border-1 rounded">
            {items.map((item) => (
              <span key={item.key}>{item}</span>
            ))}
        </main>
        <Footer />
      </Container>
    </>
  );
}
