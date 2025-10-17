import React, { useEffect, useRef, useState } from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Selam T.",
    role: "Health Advocate",
    quote:
      "FEMA is more than an app—it’s a lifeline. Rodas’s design makes health education feel empowering and accessible.",
    image: "/mypic.jpg",
  },
  {
    name: "Daniel M.",
    role: "Startup Founder",
    quote:
      "Working with Rodas was seamless. Her attention to detail and user empathy made our product shine.",
    image: "/pic1.jpg",
  },
  {
    name: "Liya A.",
    role: "UX Mentor",
    quote:
      "Rodas brings clarity, creativity, and purpose to every interface she touches. Her growth is inspiring.",
    image: "/pic1.jpg",
  },
  {
    name: "Mikiyas K.",
    role: "Software Engineer",
    quote:
      "Her designs balance beauty with usability — truly a professional approach that stands out.",
    image: "/mypic.jpg",
  },
  {
    name: "Sara Y.",
    role: "Designer",
    quote:
      "She has a rare mix of creativity and precision. Every interface feels intentional and human.",
    image: "/pic1.jpg",
  },
];

export default function Testimonial() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Duplicate testimonials for seamless CSS loop
  const items = [...testimonials, ...testimonials];

  // compute which card is visually closest to the container center
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateActive = () => {
      const cards = container.querySelectorAll(".testimonial-card");
      if (!cards.length) return;

      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.left + containerRect.width / 2;

      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenter - centerX);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });

      // normalize to original testimonials length
      setActiveIndex(closest % testimonials.length);
      rafRef.current = requestAnimationFrame(updateActive);
    };

    rafRef.current = requestAnimationFrame(updateActive);
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Pause/resume animation on hover or touch
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const pause = () => track.classList.add("paused");
    const resume = () => track.classList.remove("paused");

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("touchstart", pause, { passive: true });
    track.addEventListener("touchend", resume);

    return () => {
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      track.removeEventListener("touchstart", pause);
      track.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="testimonial" id="testimonial">
      <h2>Testimonials</h2>

      <div className="testimonial-viewport" ref={containerRef}>
        {/* Track: animated via CSS transform. Duplicated items create seamless loop */}
        <div className="testimonial-track" ref={trackRef} aria-hidden="false">
          {items.map((t, i) => (
            <article
              className={`testimonial-card ${
                i % testimonials.length === activeIndex ? "active" : ""
              }`}
              key={i}
            >
              <img src={t.image} alt={t.name} />
              <p className="quote">“{t.quote}”</p>
              <h3>{t.name}</h3>
              <span className="role">{t.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
