
const router = require("express").Router()
const authToken  =require("../middlewares/authenticateToken");
const Posts = require("../modules/Posts.Module");

//What with authToken
router.get("/public",(req,res)=>{
    console.log("In Posts routes",Posts);
    res.json(Posts)
})

router.get("/private", authToken, (req, res) => {
    res.json(privatePosts);
  });

module.exports = router