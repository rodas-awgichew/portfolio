// src/components/About.js
import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          } else {
            entry.target.classList.remove('animate');
          }
        });
      },
      { threshold: 0.3 } // triggers when 30% of the section is visible
    );

    const currentSection = aboutRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const resumeDocId = '1KZexvDrkUOT5X6wLbtXNyWc0ofv6NGlE';
  const exportUrl = `https://docs.google.com/document/d/1v5nZxfUj-xEWa6y6tGkDxbKazJr8m_YJXcv1NPbqBxU/edit?usp=sharing`;

  const handleDownloadResume = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(exportUrl, { mode: 'cors' });
      if (!res.ok) throw new Error('Network response was not ok');

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Rodas_Awgichew_Resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      // Fallback: open the export URL in a new tab (browser will usually prompt download)
      window.open(exportUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="about" ref={aboutRef} className="about-section">
      <div className="about-container">
        {/* Image */}
        <div className="about-image">
          <div className="image-wrapper">
            <img src="/mypic.jpg" alt="Rodas Awgichew" />
          </div>
        </div>
        {/*  Text */}
        <div className="about-text">
          <h2 className="about-title">
            About <span className="highlight">Me</span>
          </h2>
          <p className="about-desc">
            I’m <span className="highlight">Rodas Awgichew</span>, a passionate
            Front-End Developer focused on crafting clean, responsive, and
            user-friendly web interfaces. I care deeply about bringing designs
            to life with precision and performance, ensuring every detail looks
            and feels right across all devices.
          </p>
          <p className="about-desc">
            With a strong foundation in HTML, CSS, JavaScript, and React, I
            strive to create experiences that are both visually appealing and
            accessible. I’m always exploring new tools and refining my workflow
            to deliver modern web solutions that make an impact.
          </p>

          <div className="about-highlights">
            <span>✨ Always Learning</span>
            <span>⚙️ Always Building</span>
            <span>💡 Always Exploring</span>
          </div>

          <div className="contact-info">
            <p>📞 +251 993 386 838</p>
            <p>📧 rodas.awgichew21@gmail.com</p>
          </div>

          <div className="about-buttons">
            <a href="#contact" className="btn contact-btn">Contact Me</a>
            <a
              href={exportUrl}
              className="btn resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadResume}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
