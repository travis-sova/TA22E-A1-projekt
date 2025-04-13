const db = require("../db");

class User {
  static async isAdmin(userId) {
    try {
      const [users] = await db.query("SELECT perms FROM user WHERE id = ?", [
        userId,
      ]);

      if (users.length === 0) return false;
      return users[0].perms === 1;
    } catch (err) {
      console.error("isAdmin check failed:", err);
      return false;
    }
  }
}

module.exports = User;
