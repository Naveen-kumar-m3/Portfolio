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
            I&apos;m a passionate Software Systems student and an aspiring Software Development intern who loves building meaningful digital experiences. My interests lie at the intersection of software development, full-stack development, machine learning, and user-centered design.
          </p>
          <p>
            I&apos;m always curious about new technologies and am constantly improving my skills to build scalable and impactful solutions.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <div
            style={{
              width: "100%",
              maxWidth: "200px", /* Made smaller */
              aspectRatio: "1",
              backgroundColor: "rgba(100, 100, 100, 0.2)",
              borderRadius: "50%", /* Made circular for a profile pic look */
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "inherit",
              border: "2px dashed rgba(150, 150, 150, 0.4)",
              overflow: "hidden"
            }}
          >
            {/* Replace the text below with your <img src="..." alt="Profile" style={{width: '100%', height: '100%', objectFit: 'cover'}} /> */}
            <span style={{ fontSize: '0.9rem', textAlign: 'center' }}>[Image]</span>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: '500', fontSize: '1rem', color: 'var(--text-color, inherit)', maxWidth: '250px' }}>
              🎓 3rd Year MSc Software Systems Student at PSG College of Technology
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1rem', alignItems: 'center' }}>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" style={{ pointerEvents: 'none' }}></path>
                  <rect x="2" y="9" width="4" height="12" style={{ pointerEvents: 'none' }}></rect>
                  <circle cx="4" cy="4" r="2" style={{ pointerEvents: 'none' }}></circle>
                </svg>
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" style={{ pointerEvents: 'none' }}></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

