import "../assets/style/common.css";
import Home from "./Home";
import Education from "./Education";
import Experience from "./Experience.js";
import Projects from "./Projects";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container, Collapse } from "react-bootstrap";
import { useState } from "react";

const Header = () => {
  // State to control the collapse of the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the collapse
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Navbar sticky="top" expand="lg" className="navbar-light bg-light py-3">
        <Container>
          {/* Top Notification */}

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
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/education"
                className="btn fs-5 secondary-text-color mx-2"
                onClick={toggleMenu}
              >
                Education
              </Link>
              <Link
                to="/experience"
                className="btn fs-5 secondary-text-color mx-2"
                onClick={toggleMenu}
              >
                Experience
              </Link>
              {/* <Link
                to="/projects"
                className="btn fs-5 secondary-text-color mx-2"
                onClick={toggleMenu}
              >
                Projects
              </Link> */}
              <Link
                to="/contact"
                className="btn fs-5 secondary-text-color mx-2"
                onClick={toggleMenu}
              >
                Contact Me
              </Link>
            </Nav>
          </Navbar.Collapse>

          {/* Mobile Menu - Collapsible */}
          <div className="d-block d-sm-none">
            <Collapse in={isOpen}>
              <div id="mobile-menu">
                <div className="list-group">
                  <Link
                    to="/home"
                    className="list-group-item list-group-item-action bg-success text-white"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link
                    to="/education"
                    className="list-group-item list-group-item-action bg-light text-success"
                    onClick={toggleMenu}
                  >
                    Education
                  </Link>
                  <Link
                    to="/experience"
                    className="list-group-item list-group-item-action bg-light text-success"
                    onClick={toggleMenu}
                  >
                    Experience
                  </Link>
                  {/* <Link
                    to="/projects"
                    className="list-group-item list-group-item-action bg-light text-success"
                    onClick={toggleMenu}
                  >
                    Projects
                  </Link> */}
                  <Link
                    to="/contact"
                    className="list-group-item list-group-item-action bg-light text-success"
                    onClick={toggleMenu}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </Collapse>
          </div>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Header;
