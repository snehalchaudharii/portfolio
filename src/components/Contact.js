import React from "react";
import emailIcon from "../assets/img/email.png";
import githubIcon from "../assets/img/github.png";
import linkedinIcon from "../assets/img/linkedin.png";
import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap icons

const Contact = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "Snehal_chaudhari_Front_End_Resume.pdf"; // Add your resume path here
    link.download = "Snehal_chaudhari_Front_End_Resume.pdf";
    link.click();
  };

  return (
    <div className="contact-section py-5">
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center third-text-color mb-4">Contact Me</h1>
        <p className="text-center primary-text-color mb-5">
          I'd love to hear from you! Feel free to reach out for any questions or
          collaborations.
        </p>
        <div className="row gy-4 justify-content-center">
          <div className="d-flex justify-content-center mt-4">
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

          {/* Resume Download */}
          <div className="col-lg-10 col-md-12 d-flex justify-content-center">
            <div className="download-resume p-4 text-center">
              <h5 className="secondary-text-color mb-3">Download My Resume</h5>
              <p className="text-muted mb-4">
                Click the button below to download my latest resume.
              </p>
              <button
                className="btn btn-outline-primary btn-lg"
                onClick={handleDownload}
              >
                <i className="bi bi-download me-2"></i> Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
