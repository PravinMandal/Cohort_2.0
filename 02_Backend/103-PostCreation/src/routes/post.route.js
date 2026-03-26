const express = require("express")
const postRouter = express.Router()
const multer = require("multer")
const { createPostController, getPostController, getPostDetailsController } = require("../controllers/post.controller")
const upload = multer({storage : multer.memoryStorage()})


postRouter.post("/", upload.single("image"), createPostController)

postRouter.get("/", getPostController)

// GET /api/posts/details/:postid
// return the details about specific posts with the id. also check whether the post belong to the user who requested it

postRouter.get("/details/:postId", getPostDetailsController)

module.exports = postRouter