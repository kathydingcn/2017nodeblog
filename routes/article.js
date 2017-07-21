let express = require("express");
let router = express.Router();

router.get("/add",function(req,res){
    res.send("article add page");
});

module.exports = router;