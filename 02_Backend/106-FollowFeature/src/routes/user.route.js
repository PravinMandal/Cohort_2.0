const express = require("express")
const userRouter = express.Router();
const identifyUser = require("../middlewares/auth.middleware")
const userController = require("../controllers/user.controller")

// more specific routes first
userRouter.post("/follow/accept/:username", identifyUser, userController.acceptFollowController)
userRouter.post("/follow/reject/:username", identifyUser, userController.rejectFollowController)
userRouter.get("/follow/requests", identifyUser, userController.getPendingRequestsController)

// send follow request (status = pending by default)
userRouter.post("/follow/:username", identifyUser, userController.followUserController)

// cancel pending request or unfollow accepted
userRouter.post("/unfollow/:username", identifyUser, userController.unfollowUserController)

// lists
userRouter.get("/followers", identifyUser, userController.getFollowersController)
userRouter.get("/following", identifyUser, userController.getFollowingController)

module.exports = userRouter
