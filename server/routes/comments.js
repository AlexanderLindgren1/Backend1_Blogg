const express = require("express");
const router = express.Router();
const authToken = require("../middlewares/authenticateToken");
const  postComments  = require("../controller/comment.controller");
router.use(express.urlencoded({ extended: true }));
router.use(express.json());


const { getPostComments, addPostComment } = postComments

// GET route to view all comments for a specific post
router.get("/:postId/comments", getPostComments);



// POST route to add a new comment to a post
router.post("/:id/add",authToken, addPostComment);

module.exports = router;
