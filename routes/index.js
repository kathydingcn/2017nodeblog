let express = require("express");
let router = express.Router();
router.get("/",function(req,res){
    //relative path, to the views directory
    res.render("index.html", {title:"DingDingMao Blog"});
});

module.exports = router;