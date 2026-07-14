const mongoose = require("mongoose")

const followSchema = new mongoose.Schema({
    follower : {
        type : String,
        required : [true, "Follower is required to follow someone"]
    },
    followee : {
        type : String,
        required : [true, "Followee is required for a follow request"]
    },
    status : {
        type : String,
        default : "pending",
        enum : {
            values : ["pending", "accepted", "rejected"],
            message : "Status can only be pending, accepted or rejected"
        }
    }
}, {
    timestamps : true
})

followSchema.index({follower : 1, followee : 1}, {unique : true})

const followModel = mongoose.model("follows", followSchema)

module.exports = followModel 