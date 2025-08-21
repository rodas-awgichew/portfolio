import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      img: '/fema.png',
      title: 'FEMA Health Companion',
      description: 'Empowering women through education, early screening, and personalized health insights.',
      tech: ['React', 'Tailwind CSS', 'API Integration'],
      link: 'https://real-state-landing-page-henna.vercel.app/'
    },
    {
      img: '/movieApp.png',
      title: 'Movie App',
      description: 'Practice project for dynamic rendering, API fetching, and error handling.',
      tech: ['React', 'JavaScript', 'TMDB API'],
      link: 'https://incandescent-kleicha-b50105.netlify.app/'
    },
    {
      img: '/portfolio.png',
      title: 'Portfolio Site',
      description: 'Creative showcase of UI/UX skills, animations, and responsive design.',
      tech: ['Javasript', 'Framer Motion', 'CSS Modules'],
      link: 'https://rodas-portfoliowebsite.netlify.app/'
    },
    {
      img: '/fema.png',
      title: 'FEMA Health Companion',
      description: 'Empowering women through education, early screening, and personalized health insights.',
      tech: ['React', 'Tailwind CSS', 'API Integration'],
      link: '#'
    },
    {
      img: '/movieApp.png',
      title: 'Realstate landing page',
      description: 'responsive and modern landing page designed for real estate businesses or property listings.',
      tech: ['HTML', 'CSS', 'Javascript'],
      link: '#'
    },
    {
      img: '/fema.png',
      title: 'FEMA Health Companion',
      description: 'Empowering women through education, early screening, and personalized health insights.',
      tech: ['React', 'Tailwind CSS', 'API Integration'],
      link: '#'
    }
    
  ];

  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt='projects demo'/>
            <h3>{project.title}</h3>
            <div className='info'>
            <p>{project.description}</p>
            <ul>
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;