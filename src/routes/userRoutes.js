const express = require("express");
const router = express.Router();
const { registeruser } = require("../controllers/userController");
const { loginUser } = require("../controllers/authController");
const authmiddle = require("../middleware/authmiddleware");
const { profile } = require("../controllers/profileController");
const rolemiddle = require("../middleware/rolemiddleware");
const { updatecontroller } = require("../controllers/userupdatecontroller");
const { transactioncontrol } = require("../controllers/transactioncontroller");

router.post("/register", registeruser);
router.patch("/update", updatecontroller);
router.post("/login", loginUser);
router.get("/profile", authmiddle,rolemiddle, profile);
router.post("/transaction",authmiddle,transactioncontrol)

module.exports = router;
