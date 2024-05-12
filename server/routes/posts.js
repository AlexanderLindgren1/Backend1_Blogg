
const express = require("express")
const router = express.Router()
const authToken = require("../middlewares/authenticateToken");

const postController = require("../controller/post.controller");

router.use(express.urlencoded({ extended: true }))
router.use(express.json())


const { getUserPost, showPosts, createPost, updatePost, deletePost } = postController
//see Posts
router.get("/public", showPosts)
// get user posts 
router.get("/profile", authToken, getUserPost)
//create Post
router.post("/profile", authToken, createPost);
//Update Post
router.put("/profile/:id",authToken, updatePost)
//DELETE post
router.delete("/public/:id", deletePost)





module.exports = router