import React from "react";

const Education = () => {
  const degrees = [
    {
      university: "University of Mumbai",
      degree: "B.E. in Electronics and Telecommunication Engineering",
      year: "2012 - 2016",
      description: [
        "Developed a strong foundation in core engineering concepts such as circuit design, signal processing, and telecommunications.",
        "Gained problem-solving skills and practical experience in analyzing and troubleshooting hardware systems.",
        "Explored programming fundamentals, which sparked my interest in software development.",
      ],
      link: "https://mu.ac.in",
    },
    {
      university: "California State University, San Bernardino",
      degree: "M.S. in Information Systems and Technology (GPA: 4.0)",
      year: "2023 - 2024",
      description: [
        "Specialized in advanced programming and data management techniques.",
        "Mentored undergraduate students in Python as a Graduate Teaching Assistant.",
        "Developed hands-on skills in software development, data visualization, and business analytics.",
        "GRADUATE CULMINATING PROJECT 2024 - Published on CSUSB ScholarWorks: A graduate project on `Securing Mobile Payments: The Impact of Blockchain Technology on Transaction Integrity,` focusing on leveraging blockchain, tokenization, and smart contracts to enhance security, transparency, and fraud prevention in mobile payment systems, supported by case studies including Shido Wallet and Project Khokha.",
      ],
      link: "https://scholarworks.lib.csusb.edu/etd/2083/",
    },
  ];

  const certifications = [
    {
      title: "Sitecore Certification (P3 Proficiency)",
      provider: "Accenture",
      link: "https://www.sitecore.com/",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold display-4 third-text-color">
        🎓 My Education
      </h2>

      {/* Timeline for Degrees */}
      <div className="timeline">
        {degrees.map((degree, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-content">
              <h5 className="fw-bold primary-text-color">
                {degree.university}
              </h5>
              <p className="secondary-text-color mb-1">{degree.year}</p>
              <h6 className="fw-bold">{degree.degree}</h6>
              <ul>
                {degree.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <a
                href={degree.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-website-btn"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="mt-5">
        <h4 className="fw-bold primary-text-color mb-4">Certifications</h4>
        <div className="row">
          {certifications.map((cert, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card border-0 shadow-lg h-100">
                <div className="card-body text-center">
                  <h5 className="fw-bold primary-text-color">{cert.title}</h5>
                  <p className="secondary-text-color">{cert.provider}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
