const express = require("express");
const router = express.Router();
const { registeruser } = require("../controllers/userController");
const { loginUser } = require("../controllers/authController");
const authmiddle = require("../middleware/authmiddleware");
const { profile } = require("../controllers/profileController");


router.post("/register", registeruser);
router.post("/login", loginUser)
router.get("/profile",authmiddle,profile)

module.exports = router;

