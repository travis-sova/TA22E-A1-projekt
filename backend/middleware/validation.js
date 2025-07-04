const { body, validationResult } = require("express-validator");

const validateRegisterInput = [
  body("username")
    .trim()
    .isLength({ min: 3, max: 20 })
    .withMessage("Username must be between 3-20 characters")
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage("Username can only contain letters, numbers, and underscores"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email")
    .normalizeEmail(),

  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/[0-9]/)
    .withMessage("Password must contain a number")
    .matches(/[a-z]/)
    .withMessage("Password must contain a lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contain an uppercase letter"),

  body("fname").trim().notEmpty().withMessage("First name is required"),

  body("sname").trim().notEmpty().withMessage("Last name is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateLoginInput = [
  body("username").trim().notEmpty().withMessage("Username is required"),

  body("password").notEmpty().withMessage("Password is required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validatePasswordChangeInput = [
  body("oldPassword").notEmpty().withMessage("Please enter your old password"),
  body("newPassword").notEmpty().withMessage("Please enter your new password"),
  body("newPasswordConfirm").notEmpty().withMessage("Please confirm the password"),

  body("newPassword").custom((value, { req }) => {
    if (value !== req.body.newPasswordConfirm) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),

  body("newPassword")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/[0-9]/)
    .withMessage("Password must contain a number")
    .matches(/[a-z]/)
    .withMessage("Password must contain a lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contain an uppercase letter"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateRegisterInput, validateLoginInput, validatePasswordChangeInput };
