const express = require("express")
const postRouter = express.Router()
const multer = require("multer")
const postController = require("../controllers/post.controller")
const upload = multer({storage : multer.memoryStorage()})


postRouter.post("/", upload.single("image"), postController)

module.exports = postRouter