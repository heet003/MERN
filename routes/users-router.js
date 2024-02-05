const express = require("express");
const { check } = require("express-validator");

const usersController = require("../controllers/users-controller");
const fileUpload = require("../middleware/upload");

const router = express.Router();

// GET /API/USERS/    'GET USERS'
router.get("/", usersController.getUsers);

// POST /API/USERS/SIGUP    'SIGNUP'
router.post(
  "/signup",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 8 }),
  ],
  usersController.signup
);

// POST /API/USERS/LOGIN    'LOGIN'
router.post(
  "/login",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 8 }),
  ],
  usersController.login
);

module.exports = router;
