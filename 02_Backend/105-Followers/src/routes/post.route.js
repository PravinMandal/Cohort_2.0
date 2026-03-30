const express = require("express")
const { createPostController, getPostController, getPostDetailsController } = require("../controllers/post.controller")
const multer = require("multer")
const identifyUser = require("../middlewares/auth.middleware")
const upload = multer({storage : multer.memoryStorage()})
const postRouter = express.Router()


postRouter.post("/", identifyUser, upload.single("image"), createPostController)
postRouter.get("/", identifyUser, getPostController)
postRouter.get("/details/:postId", identifyUser, getPostDetailsController)


module.exports = postRouter