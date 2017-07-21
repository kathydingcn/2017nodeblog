let express = require("express");
let router = express.Router();

router.get("/signup", function(req,res){
    res.render("user/signup.html",{title:"sign up"});
});
router.get("/signin",function(req,res){
    res.render("user/signin.html",{title:"sign in"});
});
router.get("/signout",function(req,res){
    res.send("user signout page");
});
module.exports = router;