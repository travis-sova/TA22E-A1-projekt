const express = require("express");
const router = express.Router();
const db = require("../db");

// Get shows for a specific movie
router.get("/movie/:movieId", async (req, res) => {
  try {
    const [shows] = await db.query(
      `
            SELECT s.*, c.name as cinema_name
            FROM shows s
            JOIN cinema c ON s.cinema = c.id
            WHERE s.movie = ?
        `,
      [req.params.movieId]
    );
    res.json(shows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
