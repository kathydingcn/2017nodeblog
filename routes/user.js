let express = require("express");
let router = express.Router();

router.get("/signup", function(req,res){
    res.send("user signup page");
});
router.get("/signin",function(req,res){
    res.send("user signin page");
});
router.get("/signout",function(req,res){
    res.send("user signout page");
});
module.exports = router;