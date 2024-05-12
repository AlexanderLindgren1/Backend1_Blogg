
const express = require("express")
const router = express.Router()
const authToken = require("../middlewares/authenticateToken");
const Post = require("../modules/Posts.Module");
const User = require("../modules/Users.Module");
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




//Hello there this is from yesterday (2024-05-06)look at chatgpt okay? so you can fix you inlognning and post and get the user with you post :)

module.exports = router