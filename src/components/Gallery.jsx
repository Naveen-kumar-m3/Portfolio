import React from "react";

const galleryItems = [
  {
    id: "dashboard",
    title: "Learning Dashboard",
    description: "A clean, card-based dashboard layout for tracking study progress and upcoming tasks."
  },
  {
    id: "mobile-mentor",
    title: "Mobile Mentor Screens",
    description: "High-fidelity mobile screens for an AI mentor that guides students through complex topics step by step."
  },
  {
    id: "flows",
    title: "User Flows & Prototypes",
    description: "Interactive Figma prototypes exploring onboarding, course discovery, and quiz experiences."
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="section">
      <div className="section-header">
        <h2>Portfolio · Design Showcase</h2>
        <p>Selected UI/UX explorations and Figma-based concepts.</p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article key={item.id} className="card gallery-card">
            <div className="gallery-image-placeholder">
              <span>UI / UX</span>
            </div>
            <div className="gallery-body">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="gallery-meta">Figma · Prototyping · Design Systems</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

