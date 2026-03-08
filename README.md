# Naveen Kumar · Portfolio

A modern, responsive portfolio website for **Naveen Kumar**, an aspiring software developer and Full-stack Developer, built with **React**, **Vite**, and a minimal **Express** backend for the contact form.

## Folder structure

- `index.html` – Vite HTML entry
- `package.json` – frontend + backend scripts and dependencies
- `vite.config.mts` – Vite + API proxy configuration
- `src/`
  - `main.jsx` – React entry
  - `App.jsx` – top-level layout and sections
  - `styles.css` – global styling, layout, and animations
  - `components/`
    - `Navbar.jsx`
    - `Hero.jsx`
    - `About.jsx`
    - `Skills.jsx`
    - `Projects.jsx`
    - `Gallery.jsx`
    - `Contact.jsx`
    - `Footer.jsx`
  - `data/`
    - `projects.js` – project data
- `server/`
  - `index.js` – Express API (`/api/contact`, `/api/health`)
  - `package.json` – sets `"type": "module"` for ES modules

## Running the website locally

### 1. Install dependencies

Open a terminal in `c:\Users\ASUS\projects\portfolio` and run:

```bash
npm install
```

This installs both frontend (React/Vite) and backend (Express) dependencies from the root `package.json`.

### 2. Start the backend (contact API)

In the same folder, start the Express server:

```bash
npm run server
```

This will start the API on `http://localhost:4000`.

### 3. Start the frontend (React + Vite)

Open a second terminal in `c:\Users\ASUS\projects\portfolio` and run:

```bash
npm run dev
```

Vite will start the dev server (by default on `http://localhost:5173`) and proxy `/api/*` requests to the Express server.

### 4. Open the site

Visit:

- `http://localhost:5173` – portfolio UI
- `http://localhost:4000/api/health` – API health check (JSON)

### Notes

- The **Contact** form submits to `/api/contact`. The backend currently logs messages to the server console; you can later extend it to send emails or store submissions.
- All styling is in `src/styles.css` with a modern, dark, minimal theme, responsive grids, smooth scrolling, and hover states for cards and buttons.

