const jwt = require("jsonwebtoken");
const db = require("../db");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const authenticate = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ error: "Authentication token required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (req.method === "GET") {
      // Fetch user data
      const [users] = await db.execute(
        "SELECT username, email, number, fname, sname, DATE_FORMAT(dob, '%Y-%m-%d') as dob, sex, newsletter FROM user WHERE id = ?", [
        decoded.id,
      ]);

      if (users.length === 0) {
        return res.status(401).json({ error: "User not found" });
      }

      req.user = users[0];
      req.token = token;
      next();
    } else if (req.method === "PUT") {
      // Update user data
      const { email, number, newsletter } = req.body;
      const [results] = await db.execute(
        "UPDATE user SET email = ?, number = ?, newsletter = ? WHERE id = ?", [
        email, number, newsletter, decoded.id
      ]);
      if (results.affectedRows === 0) {
        return res.status(401).json({ error: "User not found" });
      }

      return res.json({ message: "Data updated" });

    }
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

const changePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ error: "Authentication token required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const [users] = await db.execute("SELECT * FROM user WHERE id = ?", [
      decoded.id,
    ]);

    if (users.length === 0) {
      return res.status(401).json({ error: "User not found" });
    }

    const user = users[0];
    const passwordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 12);

    const [result] = await db.execute(
      "UPDATE user SET password = ? WHERE id = ?", [
      hashedNewPassword, decoded.id
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Password change failed" });
    }

    return res.json({ message: "Password changed" });
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
}

const deleteAuthentication = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return res.status(401).json({ error: "Authentication token required" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const [result] = await db.execute(
      "DELETE FROM user WHERE id = ?", [
      decoded.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({ message: "User deleted" });
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

module.exports = { authenticate, isAdmin, deleteAuthentication, changePassword };
