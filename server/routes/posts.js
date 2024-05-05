
const router = require("express").Router()
const authToken = require("../middlewares/authenticateToken");
const Post = require("../modules/Posts.Module");

//What with authToken
router.get("/public", async (req, res) => {
  console.log("In Posts routes", Post);
  const posts = await Post.find()
  res.json(posts)
})

//create Post
router.post("/public", async (req, res) => {
  try {
    const newPost = req.body
    console.log(newPost);
    const post = await Post.create(newPost)
    res.status(201).json(post)
    // res.status(500).send("Uninplimented")
  }
  catch (err) {
    console.log(err);
    res.status(400).json({
      msg: err.message
    })
  }
})


// //Update Post
// skippar med update fixa det senast onsdag (den 8)



// //DELETE post


router.get("/private", authToken, (req, res) => {
  res.json(privatePosts);
});

// router.post('test/:tt', function (req, res) {
//   console.log(1);
//   console.log(req.params['tt']);
//   res.send();
// });
module.exports = router