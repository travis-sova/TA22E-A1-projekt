const express = require("express");
const router = express.Router();
const db = require("../db");

// Get movie by ID
router.get("/:id", async (req, res) => {
  try {
    const [movie] = await db.execute("SELECT * FROM movies WHERE id = ?", [
      req.params.id,
    ]);
    if (movie.length === 0) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(movie[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
