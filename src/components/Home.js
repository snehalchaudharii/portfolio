import React from "react";
import youngLady from "../assets/svg/youngLady.svg"; // Ensure the path is correct
import emailIcon from "../assets/img/email.png";
import githubIcon from "../assets/img/github.png";
import linkedinIcon from "../assets/img/linkedin.png";
import { Container, Row, Col } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import UIUX from "../assets/svg/UIUX.svg";
import FrontEnd from "../assets/svg/frontend.svg";
import Cloud from "../assets/svg/cloudinfra.svg";

const Home = () => {
  const { ref: section1Ref, inView: section1InView } = useInView({
    triggerOnce: true,
  });
  const { ref: section2Ref, inView: section2InView } = useInView({
    triggerOnce: true,
  });
  const { ref: section3Ref, inView: section3InView } = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center p-4 px-md-8 px-lg-16">
        <div className="w-100 w-md-50 text-center text-md-start mb-4 mb-md-0">
          <h2 className="display-2 third-text-color fw-bold mb-4">
            Hi, I am Snehal
          </h2>
          <p className="fs-2 fst-italic secondary-text-color fw-light mb-4">
            ( snehalchaudhari )
          </p>
          <p className="fs-2 third-text-color fw-medium">
            A dedicated and passionate developer with a strong drive to create
            innovative and scalable web applications. I thrive in building
            end-to-end solutions that not only meet business needs but also
            enhance user experiences, delivering both technical and social
            impact.
          </p>
          <div className="d-flex justify-content-center justify-content-md-start mt-4">
            <a
              href="https://github.com/snehalchaudharii"
              className="icon-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span name="Github">
                <img src={githubIcon} alt="Github" className="socialIcon-w" />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/snehal-chaudhari-177a64124/"
              className="icon-button mx-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span name="LinkedIn">
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="socialIcon-w"
                />
              </span>
            </a>
            <a
              href="mailto:snehalachaudhari8@gmail.com"
              className="icon-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span name="Gmail">
                <img src={emailIcon} alt="Gmail" className="socialIcon-w" />
              </span>
            </a>
          </div>
        </div>
        <div className="w-100 w-md-50 d-flex justify-content-center justify-content-md-end">
          <img src={youngLady} alt="Young Lady" className="w-100" />
        </div>
      </div>
      <Container>
        {/* Section 1 */}
        <div>
          <h3 className="display-4 third-text-color fw-bold mb-4 text-center">
            What I Do
          </h3>
        </div>
        <Row className="my-5">
          <Col md={6} className="text-left">
            <div
              ref={section1Ref}
              className={`animated-image ${
                section1InView ? "slide-in-right" : ""
              }`}
            >
              <img src={FrontEnd} alt="Front End" className="w-100" />
            </div>
          </Col>
          <Col md={6} className="text-right">
            <div
              ref={section1Ref}
              className={`animated-text ${
                section1InView ? "slide-in-left" : ""
              }`}
            >
              <h2 className="display-5">Full Stack Development</h2>
              <p className="third-text-color fs-4">
                ⚡ Building responsive website front end using React.Js &
                Next.js paired with Tailwind CSS & DaisyUI
              </p>
              <p className="third-text-color fs-4">
                ⚡ Developing mobile applications using React.js
              </p>
              <p className="third-text-color fs-4">
                ⚡ Creating application backend in Node, Express, Java and C#
              </p>
            </div>
          </Col>
        </Row>

        {/* Section 2 */}
        <Row className="my-5">
          <Col md={6} className="text-left">
            <div
              ref={section2Ref}
              className={`animated-image ${
                section2InView ? "slide-in-right" : ""
              }`}
            >
              <img src={Cloud} alt="Cloud Infra" className="w-100" />
            </div>
          </Col>
          <Col md={6} className="text-right">
            <div
              ref={section2Ref}
              className={`animated-text ${
                section2InView ? "slide-in-left" : ""
              }`}
            >
              <h2 className="display-5">Cloud Infra-Architecture</h2>
              <p className="third-text-color fs-4">
                ⚡ Experience working on multiple cloud platforms
              </p>
              <p className="third-text-color fs-4">
                ⚡ Hosting and maintaining websites on virtual machine instances
                along with integration of databases
              </p>
              <p className="third-text-color fs-4">
                ⚡ Setting up schduled jobs from DB to Server or vice-versa AWS
                & Azure
              </p>
            </div>
          </Col>
        </Row>

        {/* Section 3 */}
        <Row className="my-5">
          <Col md={6} className="text-left">
            <div
              ref={section3Ref}
              className={`animated-image ${
                section3InView ? "slide-in-right" : ""
              }`}
            >
              <img src={UIUX} alt="UIUX" className="w-100" />
            </div>
          </Col>
          <Col md={6} className="text-right">
            <div
              ref={section3Ref}
              className={`animated-text ${
                section3InView ? "slide-in-left" : ""
              }`}
            >
              <h2 className="display-5">UI UX Design</h2>
              <p className="third-text-color fs-4">
                ⚡ Designing highly attractive user interface for mobile and web
                applications
              </p>
              <p className="third-text-color fs-4">
                ⚡ Customizing logo designs and building logos from scratch
              </p>
              <p className="third-text-color fs-4">
                ⚡ Creating the flow of application functionalities to optimize
                user experience
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
