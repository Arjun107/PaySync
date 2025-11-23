const express=require("express");
const router=express.Router();
const {registeruser}=require("../controllers/userController");
const {loginUser} = require("../controllers/authController")

router.post("/register",registeruser);
router.post("/login",loginUser)

module.exports=router;