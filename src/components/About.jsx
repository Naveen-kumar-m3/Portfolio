import React from "react";

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <h2>About</h2>
        <p>Who I am and how I think about building products.</p>
      </div>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I&apos;m a Computer Science student with a strong interest in UI/UX design and modern web development. I enjoy turning ideas
            into intuitive interfaces and bringing them to life with clean, maintainable code.
          </p>
          <p>
            My work focuses on understanding user needs, designing simple flows, and implementing them using web technologies. I&apos;m
            particularly interested in how design, engineering, and AI can come together to create meaningful digital experiences.
          </p>
        </div>
        <div className="about-highlights">
          <div className="chip-row">
            <span className="chip">UI/UX Design</span>
            <span className="chip">Prototyping</span>
            <span className="chip">Design Systems</span>
          </div>
          <div className="chip-row">
            <span className="chip">HTML &amp; CSS</span>
            <span className="chip">JavaScript</span>
            <span className="chip">React</span>
          </div>
          <div className="chip-row">
            <span className="chip">Git &amp; GitHub</span>
            <span className="chip">VS Code</span>
            <span className="chip">Collaborative Workflows</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

