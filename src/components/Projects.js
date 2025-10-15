import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectList = [
    {
      img: "/fema.png",
      title: "FEMA Health Companion",
      description:
        "Empowering women through education, early screening, and personalized health insights.",
      link: "https://luna-health-349o3k7dg-sadorras-projects.vercel.app/",
    },
    {
      img: "/movieApp.png",
      title: "Movie Explorer",
      description:
        "Dynamic movie browsing with API integration and real-time search.",
      link: "https://movie-app-beryl-eight-59.vercel.app/",
    },
    {
      img: "/real_state.png",
      title: "Habesha Maven",
      description:
        "Responsive and modern landing page designed for real estate businesses or property listings.",
      link: "https://real-state-landing-page-henna.vercel.app/",
    },
    {
      img: "/buddy.png",
      title: "GoBuddy",
      description:
        "Guide App built to help users discover, contribute, and share guides for places, experiences, or resources easily.",
      link: "https://rodas-portfoliowebsite.netlify.app/",
    },
    
    {
      img: "/rhythmix.png",
      title: "Rhythmix",
      description:
        "A music app that fetch songs, stream audio, manage playlists, and supports real-time playback, search, and personalized recommendations through secure endpoints.",
      link: "https://rhythmix-sepia.vercel.app/",
    },
    
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="project-gallery">
        {projectList.map((project, index) => (
          <div
            className={`project-item ${index === 0  | index === 4 ? "featured" : "" | index === 3 ? "featured2" : ""}`}
            key={index}
          >
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
