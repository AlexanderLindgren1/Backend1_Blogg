

const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    
    password: {type: String, min:6, required:true},
    email: {type: String, required:true},
    firstName: {type: String, min:2, max: 20},
    lastName: {type: String, minLength:2, maxLength: 20},
    Age: {type: Number, min:2, max: 100},
    adminStatus: {
type:Boolean
    }
})
const User =mongoose.model("User",userSchema)
module.exports = User