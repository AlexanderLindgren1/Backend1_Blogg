

const mongoose = require("mongoose")

const postSchema = mongoose.Schema({

    title: { type: String, maxLength: 30, minLength: 5, required: true },
    description: { type: String, maxLength: 500, required: true },
    comments: [{ String }]
    // Image
})


const Post = mongoose.model("Post", postSchema, "posts")
module.exports = Post
