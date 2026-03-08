import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Naveen Kumar. Crafted with care.</p>
        <p className="footer-note">Built with React, thoughtful UX, and a focus on accessibility.</p>
      </div>
    </footer>
  );
};

export default Footer;

