const express = require("express");
const router = express.Router();
const db = require("../db");

// Get shows for a specific movie
router.get("/movie/:movieId", async (req, res) => {
  try {
    const [shows] = await db.execute(
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

router.get("/show/:showId", async (req, res) => {
  try {
    const [show] = await db.execute(
      `
            SELECT s.*, c.name as cinema_name, m.name as movie_name, m.description as description
            FROM shows s
            JOIN cinema c ON s.cinema = c.id
            JOIN movies m ON s.movie = m.id
            WHERE s.id = ?
        `,
      [req.params.showId]
    );
    res.json(show[0] || null);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
