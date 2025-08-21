// src/components/About.js
import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaAccessibleIcon } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="profile">
          <img src="/profile.jpg" alt="Rodas Awgichew" className="profile-img" />
          <p className="intro">
            I'm <strong>Rodas Awgichew</strong>, a Front-End Developer and UI/UX Designer based in Addis Ababa. I specialize in building responsive, user-friendly web and mobile applications that empower people—especially through health tech.
          </p>
        </div>

        <p>
          Currently, I’m advancing <strong>FEMA</strong>, a women’s health companion app focused on education, early screening, and empowerment. I thrive on crafting accessible interfaces, integrating best practices, and designing experiences that truly make a difference.
        </p>

        <div className="skills">
          <h3>Skills & Tools</h3>
          <ul className="icon-list">
            <li><FaReact /> React</li>
            <li><FaJsSquare /> JavaScript</li>
            <li><FaHtml5 /> HTML</li>
            <li><FaCss3Alt /> CSS & Tailwind</li>
            <li><FaAccessibleIcon /> Accessibility</li>
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
              <span className="date">2022–2024</span>
              <span className="desc">Freelance UI/UX Projects – Web & Mobile</span>
            </li>
            <li>
              <span className="date">2020–2022</span>
              <span className="desc">Front-End Development Training & Portfolio Building</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;