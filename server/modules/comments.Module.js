

const mongoose = require("mongoose")

const commentsSchema = mongoose.Schema({

   content: { type: String },
   post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },

})
const Comment = mongoose.model("comment", commentsSchema)
module.exports = Comment