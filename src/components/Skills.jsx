import React from "react";

const skillCategories = [
  {
    title: "UI/UX Design",
    description: "Understanding users and crafting intuitive flows.",
    items: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
  },
  {
    title: "Tools",
    description: "Design and collaboration tools I use often.",
    items: ["Figma", "FigJam", "Canva"]
  },
  {
    title: "Frontend",
    description: "Building responsive interfaces for the web.",
    items: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    title: "Development Tools",
    description: "Everyday tools that support my workflow.",
    items: ["Git", "GitHub", "VS Code"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="section-header">
        <h2>Skills</h2>
        <p>Blending design thinking with engineering fundamentals.</p>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <article key={category.title} className="card skill-card">
            <h3>{category.title}</h3>
            <p className="skill-description">{category.description}</p>
            <ul className="skill-list">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;

