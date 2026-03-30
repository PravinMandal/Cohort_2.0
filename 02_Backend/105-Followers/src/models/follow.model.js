const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower : {
        type : mongoose.Schema.Types.ObjectId,
        ref : users,
        required : [true, "Follwer is required to follow someone"]
    },
    followee : {
        type : mongoose.Schema.Types.ObjectId,
        ref : users,
        required : [true, "Followee is required for a follow request"]
    }
}, {
    timestamps : true
})

const followModel = mongoose.model("follows", followSchema)

module.exports = followModel