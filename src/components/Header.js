import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Navbar sticky="top" expand="lg" className="navbar-light bg-light py-3">
      <Container>
        <Navbar.Brand
          href="/home"
          className="display-2 mx-4 fw-bold sclogo secondary-text-color"
        >
          Snehal Chaudhari
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={toggleMenu}
          aria-expanded={isOpen}
        />

        {/* Navbar Menu */}
        <Navbar.Collapse id="navbar-nav" in={isOpen}>
          <Nav className="ms-auto d-flex align-items-center">
            <Link
              to="/home"
              className="btn fs-5 secondary-text-color mx-2"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/education"
              className="btn fs-5 secondary-text-color mx-2"
              onClick={closeMenu}
            >
              Education
            </Link>
            <Link
              to="/experience"
              className="btn fs-5 secondary-text-color mx-2"
              onClick={closeMenu}
            >
              Experience
            </Link>
            <Link
              to="/contact"
              className="btn fs-5 secondary-text-color mx-2"
              onClick={closeMenu}
            >
              Contact Me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
