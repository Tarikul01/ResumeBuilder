const express = require("express");
const router = express.Router();
const authVerifyMiddleware = require("../middleware/authVerifyMiddle")
const home=require("../controllers/homeController")
const userController=require("../controllers/userController")

router.get("/home",authVerifyMiddleware.auth,home.HomePage)
router.post("/signup",userController.Signup)
router.post("/signin",userController.Signin)
router.post("/update",authVerifyMiddleware.auth,userController.Update)






module.exports = router;
