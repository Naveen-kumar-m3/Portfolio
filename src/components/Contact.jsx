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
          <ul className="contact-list">
            <li>
              <span className="contact-label">Email</span>
              <a href="mailto:naveen@example.com">naveen@example.com</a>
            </li>
            <li>
              <span className="contact-label">LinkedIn</span>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                linkedin.com/in/naveen-kumar
              </a>
            </li>
            <li>
              <span className="contact-label">GitHub</span>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                github.com/naveen-kumar
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

