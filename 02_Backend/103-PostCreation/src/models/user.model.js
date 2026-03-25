const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : [true, "user with this username already exists"],
        required : true
    },
    email : {
        type : String,
        unique : [true, "user with this email already exists"],
        required : true
    },
    password : {
        type : String,
        required : true
    },
    profileImage : {
        type : String,
        default : "https://commons.wikimedia.org/wiki/File:Default_pfp.svg"
    },
    bio : String
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel