import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields." });
  }

  // For now, just log the message to the server console.
  // In a real project, you could send an email or store it in a database.
  console.log("New contact message:", { name, email, message });

  return res.json({ ok: true });
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, status: "online" });
});

app.listen(PORT, () => {
  console.log(`Contact API server listening on http://localhost:${PORT}`);
});

