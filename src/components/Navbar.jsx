import React from "react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

const Navbar = ({ onNavClick, activeSection }) => {
  const handleClick = (id) => (e) => {
    e.preventDefault();
    onNavClick(id);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <nav className="nav-links">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleClick(link.id)}
              className={activeSection === link.id ? "nav-link active" : "nav-link"}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

