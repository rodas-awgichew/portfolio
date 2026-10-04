import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      img: "/fema cover.png",
      title: "FEMA Health Companion",
      description:
        "Empowering women through education, early screening, and personalized health insights.",
      link: "https://luna-health-349o3k7dg-sadorras-projects.vercel.app/",
    },
    {
      img: "/image.png",
      title: "Crypto",
      description:
        "A modern web application project aimed at revolutionizing digital finance through secure, transparent, and decentralized blockchain solutions.",
      link: "https://crypto-rho-ochre.vercel.app/",
    },
    {
      img: "/ecommerce app cover.png",
      title: "E-Commerce Web application",
      description:
        "A modern full-stack e-commerce app built with Next.js, featuring secure authentication and backend services powered by Supabase.",
      link: "https://talia-ecommerce-web-app.vercel.app/",
    },
    {
      img: "/buddy.png",
      title: "GoBuddy",
      description:
        "Guide App built to help users discover, contribute, and share guides for places, experiences, or resources easily.",
      link: "https://guide-app-seven.vercel.app/",
    },
    {
      img: "/pic7.png",
      title: "AI Archivist",
      description:
        "Second Brain is web app with Firebase authentication/storage and LLM-powered chat.",
      link: "https://second-brain-ai-archivist.vercel.app/",
    },
  ];

  // Clean class helper to determine grid spanning based on index
  const getProjectClass = (index) => {
    if (index === 0 || index === 4) return "project-item featured";
    if (index === 3) return "project-item featured2";
    return "project-item";
  };

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-gallery">
        {projectList.map((project, index) => (
          <div className={getProjectClass(index)} key={index}>
            <img src={project.img} alt={project.title} className="project-img" />
            <div className="overlay"></div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-btn"
              >
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;