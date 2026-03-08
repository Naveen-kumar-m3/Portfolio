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
          <button className="btn primary" onClick={onSecondaryClick}>
            Collaborate
          </button>
          <a href="/resume.pdf" download className="btn ghost">
            Download Resume
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;

