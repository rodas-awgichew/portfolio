import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aluh0dh",
        "template_d6xlnqh",
        e.target,
        "KEWEJc1fwZ6TTZWTE"
      )
      .then(
        () => {
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact" data-animate="fade-up">
        <h2>Get in Touch</h2>
        <p className="intro">
          Whether you’re interested in collaborating, have a question about my
          work, or just want to say hi — I’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Your name" required />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Your email" required />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" rows="5" placeholder="Your message" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {showToast && <div className="toast">✅ Message sent successfully!</div>}
    </section>
  );
};

export default Contact;
