import React from "react";
import { Link } from "react-router-dom"; // Corrected import
import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
  // State to control the collapse of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the collapse
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to close the menu when a link is clicked
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
        <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />

        {/* Navbar Menu for Large Screens */}
        <Navbar.Collapse id="navbar-nav">
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
