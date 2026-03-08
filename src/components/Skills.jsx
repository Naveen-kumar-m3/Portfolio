import React from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    description: "",
    items: ["Python", "JavaScript", "C++", "C", "Java"]
  },
  {
    title: "Web Development",
    description: "",
    items: ["UI/UX", "HTML", "CSS", "JavaScript", "REST APIs"]
  },
  {
    title: "AI / Machine Learning",
    description: "",
    items: ["Machine Learning", "Data Analysis", "Model Training"]
  },
  {
    title: "Tools & Technologies",
    description: "",
    items: ["Git", "GitHub", "Cursor AI", "Docker", "FastAPI", "Figma", "VS Code", "Draw.io", "Canva"]
  },
  {
    title: "Concepts",
    description: "",
    items: ["Data Structures", "Algorithms", "Object-Oriented Programming", "System Design Basics", "Operating Systems", "Networks"]
  },
  {
    title: "Databases",
    description: "",
    items: ["SQL (MySQL, PostgreSQL)", "NoSQL (MongoDB)"]
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

