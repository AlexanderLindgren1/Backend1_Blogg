
const express = require("express")
const router = express.Router()
const authToken = require("../middlewares/authenticateToken");
const Post = require("../modules/Posts.Module");
const User = require("../modules/Users.Module");
router.use(express.urlencoded({ extended: true }))
router.use(express.json())

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

router.put("/public/:id", async (req, res) => {
  const id = req.params.id
  const updatePost = req.body
  const post = await Post.findOne({ _id: id })
  if (post == null) {
    console.log("Its null");
    return res.json("There are no post by the title, (WHERE: in routes/post.js)")
  }
  console.log("Updated version", updatePost);
  console.log("get One post", post);
  //Change the post
  post.title = updatePost.title
  post.description = updatePost.description
  //save in the database
  await post.save()
  console.log("This is the updated post", post);
})

// //DELETE post
router.delete("/public/:id", async (req, res) => {
  try {
    const postId = req.params.id
    const post = await Post.findByIdAndDelete(postId);
    if (!post) return res.status(404).send({ message: 'Book not found' });
    res.status(200).send({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).send(error);
  }
})

router.get("/private", authToken, async (req, res) => {


  const posts = await Post.find()
  res.json(posts)
});

router.get("/xx", authToken, async (req, res) => {
  //There are much better way to get the ID and I can do it but it probely take longer time after fixing styling then you can fix it.

  try {
    const getTheUser = await User.findOne({email:req.user})

    const {title, description} = req.body
    const newPost = {
      title,
      description,
      user:getTheUser
    }
    console.log(newPost);
    const post = await Post.create(newPost)
    res.status(201).json(post)

    console.log(getTheUser);
    console.log("fanally you doing it but you use chat gpt -_-",req.user);
    
  res.send()
    // res.status(500).send("Uninplimented")
  }
  catch (err) {
    console.log(err);
    res.status(400).json({
      msg: err.message
    })
  }
  

});

//Hello there this is from yesterday (2024-05-06)look at chatgpt okay? so you can fix you inlognning and post and get the user with you post :)

module.exports = router