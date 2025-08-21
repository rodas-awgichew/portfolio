import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Rodas Awgichew. All rights reserved.</p>
      <div className="social-links">
        <a href="https://github.com/rodas-awgichew" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/rodas-awgichew-0930072ba/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:rodas.awgichew21@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;   