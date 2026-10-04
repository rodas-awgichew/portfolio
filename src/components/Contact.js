import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [toastMessage, setToastMessage] = useState(null);
  const [toastType, setToastType] = useState("success");
  const [isLoading, setIsLoading] = useState(false);

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

  const triggerToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Replace these with your actual active credentials from your EmailJS dashboard
    const SERVICE_ID = "service_aluh0dh"; 
    const TEMPLATE_ID = "template_d6xlnqh";
    const PUBLIC_KEY = "KEWEJc1fwZ6TTZWTE";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        () => {
          setIsLoading(false);
          triggerToast("✅ Message sent successfully! I'll get back to you soon.", "success");
          e.target.reset();
        },
        (error) => {
          setIsLoading(false);
          console.error("EmailJS Error Details:", error);
          // User-friendly text displayed on screen instead of raw code crashes
          triggerToast("⚠️️ Sorry, something went wrong and your message couldn't be sent. Please try emailing me directly!", "error");
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

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {toastMessage && (
        <div className={`toast ${toastType}`}>
          {toastMessage}
        </div>
      )}
    </section>
  );
};

export default Contact;
