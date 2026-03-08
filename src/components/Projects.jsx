import React, { useMemo, useState } from "react";
import { projects } from "../data/projects.js";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "UI/UX", "AI & ML"];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Selected work across UI/UX, AI, and web development.</p>
      </div>
      <div className="projects-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={category === activeFilter ? "filter-pill active" : "filter-pill"}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="card project-card">
            <div className="project-badge">{project.tag}</div>
            <div className="project-image-placeholder">
              <span>{project.type}</span>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tools">
                {project.tools.map((tool) => (
                  <span key={tool} className="chip small">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

