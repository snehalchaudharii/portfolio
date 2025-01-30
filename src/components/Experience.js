import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Graduate Teaching Assistant",
      company: "California State University",
      duration: "Aug 2023 - Dec 2024",
      location: "California, USA",
      description: [
        "Mentored undergraduates in Python, helping them master programming fundamentals.",
        "Assisted in grading assignments and providing detailed feedback to students to improve their understanding.",
        "Facilitated lab sessions and one-on-one consultations, enabling students to complete projects effectively.",
      ],
    },
    {
      title: "Application Development Analyst",
      company: "Accenture",
      duration: "Jun 2021 - Nov 2022",
      location: "Pune, Maharashtra",
      description: [
        "Collaborated with an Australian client to support 15+ live applications for a hearing aid product built on Sitecore, ensuring 99% uptime and efficient issue resolution across Test, QA, and Production environments",
        "Debugged and resolved 30+ issues, providing prompt and effective solutions to minimize downtime.",
        "Led the creation and distribution of weekly reports by collaborating with cross-functional teams to summarize key tasks and issues, ensuring timely communication of critical updates to stakeholders and senior management.",
        "Managed 3+ projects simultaneously, overseeing timelines and deliverables to ensure on-time completion while maintaining high-quality standards and client satisfaction.",
      ],
    },
    {
      title: "UI UX Developer",
      company: "Quest Solutions",
      duration: "Mar 2019 - Mar 2021",
      location: "Mumbai, India",
      description: [
        "Designed and developed responsive UIs, improving user engagement and responsiveness by 10%.",
        "Converted mock-ups into functional web pages and UI prototypes to ensure 100% alignment with client requirements.",
        "Conducted usability testing and optimized application performance for scalability and efficiency by 20%.",
        "Created animated web campaigns and email templates, driving a 15% increase in lead generation.",
      ],
    },
    {
      title: "UI Developer",
      company: "Neural IT",
      duration: "Dec 2017 - Dec 2018",
      location: "Mumbai, India",
      description: [
        "Restructured the EHRMS application using React.js, enhancing responsiveness across desktop, mobile, and tablet, and improving user experience by 15%..",
        "Built the Zoctor mobile app for nearby doctor booking and personalized email campaigns, boosting user engagement by 10%.",
        "Constructed and optimized responsive web applications, increasing efficiency by 10%, and conducted rigorous cross-device testing for seamless performance.",
      ],
    },
    {
      title: "UI Developer Intern",
      company: "A2Zapplications",
      duration: "Jun 2017 - Dec 2017",
      location: "Mumbai, India",
      description: [
        "Designed and developed dynamic, user-friendly interfaces using React.js and Angular.",
        "Optimized web applications for faster loading speeds and improved user experience.",
      ],
    },
  ];

  return (
    <div className="experience-section">
      <div className="container">
        <h1 className="text-center third-text-color mb-4">Experience</h1>
        <p className="text-center primary-text-color mb-5">
          Work and Internship
        </p>
        <p className="fs-2 fst-italic secondary-text-color text-center fw-light mb-4">
          ( 5+ years of experience in Web Development and Application Support )
        </p>
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <div className="experience-item" key={index}>
              <div className="experience-header">
                <h5 className="secondary-text-color">{experience.title}</h5>
                <h6 className="text-muted">{experience.company}</h6>
                <p className="small-text secondary-text-color">
                  {experience.duration} | {experience.location}
                </p>
              </div>
              <div className="experience-body">
                <ul>
                  {experience.description.map((point, i) => (
                    <li key={i} className="primary-text-color">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
