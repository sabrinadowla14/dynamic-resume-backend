const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM profile limit 1", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result[0]);
  });
});

module.exports = router;
