const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption : {
        type : String,
        default : ""
    },
    imgUrl : {
        type : String,
        required : [true, "image is required for a post"]
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : [true, "userid is required for creating a post"]
    }
})

const postModel = mongoose.model("posts", postSchema)

module.exports = postModel