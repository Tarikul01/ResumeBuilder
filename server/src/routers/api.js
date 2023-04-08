const express = require("express");
const router = express.Router();
const home=require("../controllers/homeController")
const userController=require("../controllers/userController")

router.get("/",home.HomePage)
router.post("/signup",userController.Signup)
router.post("/signin",userController.Signin)






module.exports = router;
