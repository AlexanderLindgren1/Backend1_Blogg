

const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    
    title:{type:String, maxLength: 30, minLength: 5},
    description:{type: String, maxLength: 500, },
    comment:[{String}]

    // Image
    
})
const Posts = mongoose.model("Posts",postSchema)
module.exports = Posts