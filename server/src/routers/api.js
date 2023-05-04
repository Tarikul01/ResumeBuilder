const express = require("express");
const router = express.Router();
const authVerifyMiddleware = require("../middleware/authVerifyMiddle")
const home=require("../controllers/homeController")
const userController=require("../controllers/userController")
const detailsController = require("../controllers/detailsController")

router.get("/home",authVerifyMiddleware.auth,home.HomePage)
router.get("/findUser",userController.findUser)
router.post("/signup",userController.Signup)
router.post("/signin",userController.Signin)
router.post("/update",authVerifyMiddleware.auth,userController.Update)

//Details Functions routes
//skills routes
router.get("/findSkill",authVerifyMiddleware.auth,detailsController.skillFind)
router.post("/skillAdd",authVerifyMiddleware.auth,detailsController.AddSkill)
router.post("/skillUpdate",authVerifyMiddleware.auth,detailsController.SkillUpdate)

//education routes
router.get("/findEDU",authVerifyMiddleware.auth,detailsController.eduFind)
router.post("/eduAdd",authVerifyMiddleware.auth,detailsController.AddEdu)
router.post("/eduUpdate",authVerifyMiddleware.auth,detailsController.eduUpdate)

//experiences routes
router.get("/findExp",authVerifyMiddleware.auth,detailsController.expFind)
router.post("/expAdd",authVerifyMiddleware.auth,detailsController.AddExp)
router.post("/expUpdate",authVerifyMiddleware.auth,detailsController.expUpdate)









module.exports = router;
