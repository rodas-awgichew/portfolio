import React, { useEffect, useState } from "react";
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
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact" data-animate="fade-up">
        <h2>Get in Touch</h2>
        <p className="intro">
          Whether you’re interested in collaborating, have a question about my
          work, or just want to say hi — I’d love to hear from you.
        </p>

<form
  action="https://formspree.io/f/xeoryvve"
  method="POST"
  className="contact-form"
  onSubmit={handleSubmit}
>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {showToast && <div className="toast">✅ Message sent successfully!</div>}
    </section>
  );
};

export default Contact;
