const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  try {
    const [cinemas] = await db.query("SELECT * FROM cinema");
    res.json(cinemas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
