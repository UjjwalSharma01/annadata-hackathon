const express = require("express");
const router  = express.Router({ mergeParams: true });
const User    = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js")
const userController = require("../controllers/user.js")
//signup page
router.route("/signup")
.get(userController.renderSignupPage)
.post(userController.signup)
 
//login page
router.route("/login")
.post(
    passport.authenticate('local', {
         failureRedirect: '/signup'
         ,failureFlash:true 
}),async(req,res)=>{
    res.redirect("/annadata")
}
)
router.get("/logout",userController.logout)

module.exports = router;