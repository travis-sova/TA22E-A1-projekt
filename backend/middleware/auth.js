const jwt = require("jsonwebtoken");
const db = require("../db");
const User = require("../models/User");

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ error: "Authentication token required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const [users] = await db.query("SELECT * FROM user WHERE id = ?", [
      decoded.id,
    ]);

    if (users.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = users[0];
    req.token = token;
    next();
  } catch (err) {
    console.error("Authentication error:", err);

    if (err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ error: "Session expired - please login again" });
    }

    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token" });
    }

    res.status(401).json({ error: "Authentication failed" });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    if (!req.user) throw new Error("User not authenticated");

    const adminCheck = await User.isAdmin(req.user.id);
    if (!adminCheck) throw new Error("Admin access required");

    next();
  } catch (err) {
    res.status(403).json({ error: err.message });
  }
};

module.exports = { authenticate, isAdmin };
