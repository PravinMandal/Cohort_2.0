const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        unique : [true, "User with this username already exists"],
        required : true
    },
    password : {
        type : String,
        required : true
    }, 
    email : {
        type : String,
        unique : [true, "User with this Email already exists"],
        required : true
    },
    profileImage : {
        type : String,
        default : "https://commons.wikimedia.org/wiki/File:Default_pfp.svg"
    },
    bio : String
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;