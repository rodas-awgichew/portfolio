// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="intro">
        <h2>Hi, I'm <span className="highlight">Rodas Awgichew</span></h2>
        <p className="tagline">Front-End Developer & UI/UX Designer</p>
        <p className="description">
          I craft responsive, user-friendly web and mobile experiences. Currently building meaningfull projects.
        </p>
        <a href="#contact" className="cta-button">Let’s Connect</a>
      </div>
    </section>
  );
};

export default Home;