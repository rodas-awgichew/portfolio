import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFigma } from "react-icons/si";
import "./Home.css";
const Home = () => {
  const texts = [
    "I’m Rodas Awgichew",
    "Front-End Developer",
    "UI/UX Designer"
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  
  const handleScrollToAbout = (e) => {
  e.preventDefault();
  const aboutSection = document.querySelector('#about');

  // Smooth scroll
  aboutSection.scrollIntoView({ behavior: 'smooth' });

  // Re-trigger animation
  aboutSection.classList.remove('animate');
  void aboutSection.offsetWidth; // trick: forces reflow to restart CSS animation
  aboutSection.classList.add('animate');
};

  useEffect(() => {
    if (index === texts.length) return;

    // Typing speed (faster when deleting)
    const speed = deleting ? 50 : 200;

    const timeout = setTimeout(() => {
      setDisplayedText(
        deleting
          ? texts[index].substring(0, subIndex - 1)
          : texts[index].substring(0, subIndex + 1)
      );
      setSubIndex(subIndex + (deleting ? -1 : 1));

      // When typing complete, wait before deleting
      if (!deleting && subIndex === texts[index].length) {
        setTimeout(() => setDeleting(true), 1000);
      }

      // When deletion complete, move to next text
      else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section id="home" className="home-section">

      <div className="home-content">
        <div className="icon-layer">
          <FaReact className="tech-icon react" />
          <SiNextdotjs className="tech-icon next" />
          <SiTailwindcss className="tech-icon tailwind" />
          <SiTypescript className="tech-icon ts" />
          <SiFigma className="tech-icon figma" />
        </div>


        {/* looping typing effect */}
        <h2 className="headline">
          <span className="gradient-text">{displayedText}</span>
          <span className="cursor">|</span>
        </h2>

        <p className="intro">
          
          I design and build clean, responsive, and visually engaging web apps 
          using React, Next.js, and Tailwind CSS — blending creativity with performance.
        </p>


        <div className="social-icons">
          <a href="https://github.com/rodas-awgichew" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rodas-awgichew-0930072ba/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:rodas.awgichew21@gmail.com"><FaEnvelope /></a>
        </div>

        <a href="/resume.pdf" className="resume-btn">View Resume</a>
      </div>

      <div className="scroll-indicator">
         <a href="#about" onClick={handleScrollToAbout}>
             <span></span>
        </a>
     </div>
     
    </section>
  );
};

export default Home;
