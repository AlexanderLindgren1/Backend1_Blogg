const Post = require("../modules/Posts.Module");
const Comment = require("../modules/comments.Module")



// See post comments
const getPostComments = async (req, res) => {
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
}

const addPostComment = async (req, res) => {
    try {
        const postId = req.params.id;
        console.log(postId);
        
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
}


const commentController = { getPostComments, addPostComment }

module.exports = commentController