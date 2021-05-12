import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from 'next/link'
import React, { useState } from 'react';

//Header

export default function Header() {
  const [linkStyle, setLinkStyle] = useState('link-light ml-3'); 
  const [linkHover, setLinkHover] = useState('text-decoration-none'); 
  return (
    <header className="">
      <Navbar className="navbar-dark bg-dark bg-gradient " expand="lg">
        <Navbar.Brand href="/" className="text-white">Best Devs Ever!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Link href="/">
                <a className={`${linkStyle} ${linkHover}`}>Home</a>
              </Link>
              <Link href="/services">
                <a className={`${linkStyle} ${linkHover}`}>Services</a>
              </Link>
              <Link href="/contact">
                <a className={`${linkStyle} ${linkHover}`}>Contact</a>
              </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}
