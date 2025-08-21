// src/components/About.js
import React from 'react';
import './About.css';



const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="profile">
          <img src="\mypic.jpg" alt="Rodas Awgichew" className="profile-img" />
          <p className="intro">
            I'm <strong>Rodas Awgichew</strong>, a Front-End Developer and UI/UX Designer based in Addis Ababa. I specialize in building responsive, user-friendly web and mobile applications that empower people.
          </p>
        </div>

        <div className="skills">
          <h3>Skills & Tools</h3>
          <ul className="icon-list">
            <li> React</li>
            <li> JavaScript</li>
            <li> HTML</li>
            <li> CSS & Tailwind</li>
            <li> Accessibility</li>
          </ul>
        </div>

        <div className="timeline">
          <h3>Experience & Education</h3>
          <ul>
            <li>
              <span className="date">2024–Present</span>
              <span className="desc">Lead Designer & Developer – FEMA Health App</span>
            </li>
            <li>
              <span className="date">2024–Present</span>
              <span className="desc">Freelance UI/UX Projects – Web & Mobile</span>
            </li>
            <li>
              <span className="date">2023–2024</span>
              <span className="desc">Front-End Development Training </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;