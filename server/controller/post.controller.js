
const express = require("express");
const router = express.Router();


const Post = require("../modules/Posts.Module");
const User = require("../modules/Users.Module");


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const getUserPost = async(req,res)=>{
    const usersEmail = req.user
    const getUser = await User.findOne({ email: usersEmail })
    if (!getUser) {return req.message("there was no User by the email")}
    const userPosts = await Post.find({user:getUser._id})
  
  console.log(userPosts);
  res.send(userPosts)
}


const showPosts = async(req,res)=>{
    const posts = await Post.find({})
    res.json(posts)
}


const createPost = async(req,res)=>{
 
    try {
        const getTheUser = await User.findOne({ email: req.user })
    
        const { title, description, img } = req.body
        const newPost = {
          title,
          description,
     
          user: getTheUser
    
        }
        console.log(newPost);
        const post = await Post.create(newPost)
        res.status(201).json(post)
    
        console.log(getTheUser);

    
        res.send()
      }
      catch (err) {
        console.log(err);
        res.status(400).json({
          msg: err.message
        })
      }
    
}
const updatePost = async(req,res)=>{
    const id = req.params.id
    console.log(id);
    const updatePost = req.body
    const post = await Post.findOne({ _id: id })
    if (post == null) {
      console.log("Its null");
      return res.json("There are no post by the title")
    }
    console.log("Updated version", updatePost);
    console.log("get One post", post);
    post.title = updatePost.title
    post.description = updatePost.description
    await post.save()
    console.log("This is the updated post", post);
}
const deletePost = async(req,res)=>{
    try {
        const postId = req.params.id
        const post = await Post.findByIdAndDelete(postId);
        if (!post) return res.status(404).send({ message: 'Book not found' });
        res.status(200).send({ message: 'Book deleted' });
      } catch (error) {
        res.status(500).send(error);
      }
}

const postController = {getUserPost,showPosts,createPost, updatePost,deletePost}

module.exports = postController