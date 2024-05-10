const express = require("express");
const router = express.Router();
const authToken = require("../middlewares/authenticateToken");
const Post = require("../modules/Posts.Module");
const User = require("../modules/Users.Module");
const Comment = require("../modules/comments.Module");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// GET route to view all comments for a specific post
router.get("/:postId/comments", async (req, res) => {
  console.log("see all");
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    // Fetch all comments for the given post and populate the 'post' field to get the full post details
    const comments = await Comment.find({ post: postId }).populate('post');

    res.status(200).json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});



// POST route to add a new comment to a post
router.post("/:id/comments", async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    // Create a new comment
    const newComment = new Comment({
      content: req.body.content,
      post: postId // Assign the post ID to the comment's post field
    });

    // Save the comment
    const savedComment = await newComment.save();

    res.status(201).json(savedComment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
