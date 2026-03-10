import React from "react";

const Hero = ({ onPrimaryClick, onSecondaryClick }) => {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I&apos;m <span className="accent-text">Naveen Kumar</span>
        </h1>
        <h2 className="hero-subtitle">
          Aspiring software developer and full-stack intern focusing on modern web experiences.
        </h2>
        <p className="hero-tagline">
          I design and build user-centered digital experiences that balance clean interfaces, thoughtful interactions, and reliable
          engineering.
        </p>
        <div className="hero-actions">
          <button className="btn primary" onClick={onPrimaryClick}>
            View Projects
          </button>
          <button className="btn ghost" onClick={onSecondaryClick}>
            Contact
          </button>
        </div>
        <div className="hero-meta">
          <span>UI/UX Design</span>
          <span>Frontend Development</span>
          <span>Full-stack Foundations</span>
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-avatar-placeholder">
          <span className="avatar-initials">NK</span>
        </div>
        <div className="hero-card-body">
          <p className="hero-card-title">Currently exploring</p>
          <p className="hero-card-text">Modern web frameworks, design systems, and AI-powered experiences.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

