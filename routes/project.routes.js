// routes/project.routes.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all projects
router.get("/", (req, res) => {
  const query = "SELECT * FROM projects";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching projects:", err);
      return res.status(500).json({ error: "Failed to fetch projects" });
    }
    res.json(results); // ✅ should be an array
  });
});

module.exports = router;
