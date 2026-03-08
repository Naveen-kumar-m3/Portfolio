import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus({ type: "success", message: "Thanks for reaching out! I will get back to you soon." });
      event.currentTarget.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send your message right now."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-header">
        <h2>Contact</h2>
        <p>Let&apos;s connect or collaborate on something new.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Get in touch</h3>
          <p>
            I&apos;m open to internships, collaborations, and interesting projects in UI/UX, web development, and AI-assisted products.
          </p>
          <ul className="contact-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '1.5rem' }}>
              <span className="contact-label">Email</span>
              <a href="mailto:naveenkumarmoorthy75@gmail.com" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>
                naveenkumarmoorthy75@gmail.com
              </a>
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <span className="contact-label">Phone</span>
              <a href="tel:+918754743674" style={{ textDecoration: 'none', color: 'var(--primary-color)' }}>
                +91 8754743674
              </a>
            </li>
            <li style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" style={{ pointerEvents: 'none' }}></path>
                  <rect x="2" y="9" width="4" height="12" style={{ pointerEvents: 'none' }}></rect>
                  <circle cx="4" cy="4" r="2" style={{ pointerEvents: 'none' }}></circle>
                </svg>
              </a>
              <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" style={{ pointerEvents: 'none' }}></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <form className="contact-form card" onSubmit={handleSubmit}>
          <h3>Send a message</h3>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell me a bit about your idea..." required />
          </div>
          <button className="btn primary full-width" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status.message && (
            <p className={status.type === "success" ? "form-status success" : "form-status error"}>{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

