

const mongoose = require("mongoose")

const postSchema = mongoose.Schema({

    title: { type: String, maxLength: 30, minLength: 5, },
    description: { type: String, maxLength: 500, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  
})


const Post = mongoose.model("Post", postSchema, "posts")
module.exports = Post
