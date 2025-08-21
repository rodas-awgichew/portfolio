import React from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Selam T.',
    role: 'Health Advocate',
    quote: 'FEMA is more than an app—it’s a lifeline. Rodas’s design makes health education feel empowering and accessible.',
    image: '/mypic.jpg'
  },
  {
    name: 'Daniel M.',
    role: 'Startup Founder',
    quote: 'Working with Rodas was seamless. Her attention to detail and user empathy made our product shine.',
    image: '/logo192.png'
  },
  {
    name: 'Liya A.',
    role: 'UX Mentor',
    quote: 'Rodas brings clarity, creativity, and purpose to every interface she touches. Her growth is inspiring.',
    image: '/logo192.png'
  }
];

const Testimonial = () => {
  return (
    <section className="testimonial" id='testimonial'>
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.image} alt={`${t.name} profile`} />
            <p className="quote">“{t.quote}”</p>
            <h3>{t.name}</h3>
            <span className="role">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;