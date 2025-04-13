const express = require("express");
const router = express.Router();
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  validateRegisterInput,
  validateLoginInput,
} = require("../middleware/validation");
const rateLimit = require("express-rate-limit");
const { authenticate } = require("../middleware/auth");

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later",
});

router.use(["/register", "/login"], authLimiter);

router.post("/register", validateRegisterInput, async (req, res) => {
  try {
    const { username, password, email, number, fname, sname, dob, sex } =
      req.body;

    const [existingUsers] = await db.query(
      "SELECT id FROM user WHERE username = ? OR email = ?",
      [username, email]
    );

    if (existingUsers.length > 0) {
      return res
        .status(409)
        .json({ error: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const [result] = await db.query(
      "INSERT INTO user (username, password, email, number, fname, sname, dob, sex, perms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 0)",
      [username, hashedPassword, email, number, fname, sname, dob, sex]
    );

    const token = jwt.sign(
      {
        id: result.insertId,
        username: username,
        perms: 0,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const user = {
      id: result.insertId,
      username,
      email,
      fname,
      sname,
      perms: 0,
    };

    res.status(201).json({
      message: "Registration successful",
      token,
      user,
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error: "Registration failed" });
  }
});

router.post("/login", validateLoginInput, async (req, res) => {
  try {
    const { username, password } = req.body;

    const [users] = await db.query("SELECT * FROM user WHERE username = ?", [
      username,
    ]);

    if (users.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        perms: user.perms,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const { password: _, ...userData } = user;

    res.json({
      message: "Login successful",
      token,
      user: userData,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Login failed" });
  }
});

router.get("/me", authenticate, async (req, res) => {
  try {
    const { password, ...userWithoutPassword } = req.user;
    res.json(userWithoutPassword);
  } catch (err) {
    console.error("Get user error:", err);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
});

module.exports = router;
