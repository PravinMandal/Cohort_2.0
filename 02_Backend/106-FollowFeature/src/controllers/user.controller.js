const followModel = require("../models/follow.model")
const userModel = require("../models/user.model")



async function followUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isFolloweeExists = await userModel.findOne({
        username : followeeUsername
    })

    if(!isFolloweeExists) {
        return res.status(404).json({
            message : "User you are trying to follow does not exisits"
        })
    }

    if(followerUsername == followeeUsername) {
        return res.status(400).json({
            message : "You cannot follow yourself"
        })
    }

    const existingFollow = await followModel.findOne({
        follower : followerUsername,
        followee : followeeUsername
    })

    if(existingFollow) {
        if(existingFollow.status === "pending") {
            return res.status(200).json({
                message : `Follow request to ${followeeUsername} is already pending`
            })
        }

        if(existingFollow.status === "accepted") {
            return res.status(200).json({
                message : `You are already following ${followeeUsername}`
            })
        }

        // if previously rejected, allow sending request again
        existingFollow.status = "pending"
        await existingFollow.save()

        return res.status(200).json({
            message : `Follow request sent again to ${followeeUsername}`,
            follow : existingFollow
        })
    }


    const followRecord = await followModel.create({
        follower : followerUsername,
        followee : followeeUsername
        // status defaults to "pending"
    })

    res.status(201).json({
        message : `Follow request sent to ${followeeUsername}`,
        follow : followRecord
    })
}

async function acceptFollowController(req, res) {
    const followeeUsername = req.user.username
    const followerUsername = req.params.username

    const followRequest = await followModel.findOne({
        follower : followerUsername,
        followee : followeeUsername,
        status : "pending"
    })

    if(!followRequest) {
        return res.status(404).json({
            message : `No pending follow request from ${followerUsername}`
        })
    }

    followRequest.status = "accepted"
    await followRequest.save()

    res.status(200).json({
        message : `You accepted follow request from ${followerUsername}`,
        follow : followRequest
    })
}

async function rejectFollowController(req, res) {
    const followeeUsername = req.user.username
    const followerUsername = req.params.username

    const followRequest = await followModel.findOne({
        follower : followerUsername,
        followee : followeeUsername,
        status : "pending"
    })

    if(!followRequest) {
        return res.status(404).json({
            message : `No pending follow request from ${followerUsername}`
        })
    }

    followRequest.status = "rejected"
    await followRequest.save()

    res.status(200).json({
        message : `You rejected follow request from ${followerUsername}`,
        follow : followRequest
    })
}

async function unfollowUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing = await followModel.findOne({
        follower : followerUsername,
        followee : followeeUsername
    })

    if(!isUserFollowing) {
        return res.status(404).json({
            message : `You are not following this user : ${followeeUsername}`
        })
    }

    // cancel pending request OR unfollow accepted relationship
    await followModel.findByIdAndDelete(isUserFollowing._id)

    const actionMessage = isUserFollowing.status === "pending"
        ? `you cancelled follow request to ${followeeUsername}`
        : `you have unfollowed ${followeeUsername}`

    res.status(200).json({
        message : actionMessage
    })
}

async function getPendingRequestsController(req, res) {
    // requests sent TO me (I am followee)
    const pendingRequests = await followModel.find({
        followee : req.user.username,
        status : "pending"
    })

    res.status(200).json({
        message : "Pending follow requests",
        count : pendingRequests.length,
        requests : pendingRequests
    })
}

async function getFollowersController(req, res) {
    // people who follow me (accepted only)
    const followers = await followModel.find({
        followee : req.user.username,
        status : "accepted"
    })

    res.status(200).json({
        message : "Followers list",
        count : followers.length,
        followers
    })
}

async function getFollowingController(req, res) {
    // people I follow (accepted only)
    const following = await followModel.find({
        follower : req.user.username,
        status : "accepted"
    })

    res.status(200).json({
        message : "Following list",
        count : following.length,
        following
    })
}

module.exports = {
    followUserController,
    acceptFollowController,
    rejectFollowController,
    unfollowUserController,
    getPendingRequestsController,
    getFollowersController,
    getFollowingController
}
