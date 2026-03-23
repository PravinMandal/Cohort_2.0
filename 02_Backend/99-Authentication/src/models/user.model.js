const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        unique : [true, "User With this Email Already exist on database"]
    },
    password : String
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel