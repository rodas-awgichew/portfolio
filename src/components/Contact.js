import React from 'react';
import './Contact.css';



const Contact = () => {
  return (
    <section className="contact" id='contact'>
      <h2>Get in Touch</h2>
      <p className="intro">
        Whether you’re interested in collaborating, have a question about my work, or just want to say hi—I’d love to hear from you.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" placeholder="Your message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;