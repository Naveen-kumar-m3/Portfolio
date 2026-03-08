import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import BackgroundDots from "./components/BackgroundDots.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];
    const options = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (sectionIds.includes(id)) {
            setActiveSection(id);
          }
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <BackgroundDots />
      <Navbar onNavClick={handleScrollTo} activeSection={activeSection} />
      <main>
        <Hero onPrimaryClick={() => handleScrollTo("projects")} onSecondaryClick={() => handleScrollTo("contact")} />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {showScrollTop && (
        <button type="button" className="scroll-top-btn" onClick={handleScrollTop} aria-label="Scroll to top">
          ↑
        </button>
      )}
      <Footer />
    </div>
  );
};

export default App;

