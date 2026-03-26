const ImageKit = require("@imagekit/nodejs")
const {toFile} = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken");
const postModel = require("../models/post.model");
const { Folders } = require("@imagekit/nodejs/resources.js");

const client = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY']
});

async function createPostController (req, res) {

    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({
            message : "Unauthorized Access"
        })
    }
    let decoded = null
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch(err) {
        return res.status(401).json({
            message : "Unauthorized Access"
        })
    }

    const file = await client.files.upload({
        file : await toFile(Buffer.from(req.file.buffer), "file"),
        fileName : "test",
        folder : "Cohort_2"
    })


    const post = await postModel.create({
        caption : req.body.caption,
        imgUrl : file.url,
        user : decoded.id
    })

    res.status(201).json({
        message : "successfull", post
    })

}

async function getPostController (req, res) {
    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({
            message : "token missing"
        })
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch(err) {
        return res.status(401).json({
            message : "Invalid token"
        })
    }

    const posts = await postModel.find({
        user : decoded.id
    })

    res.status(200).json({
        message : "User posts fetched successfully", posts
    })
}

async function getPostDetailsController (req, res) {
    const token = req.cookies.token

    if(!token) {
        return res.status(401).json({
            message : "Unauthorized Access"
        })
    }

    let decoded

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    } catch(err) {
        return res.status(401).json({
            message : "Invalid token"
        })
    }

    const userId = decoded.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)
    if(!post) {
        return res.status(404).json({
            message : "Post does not exists"
        })
    }

    const isValidUser = post.user.toString() === userId

    if(!isValidUser) {
        return res.status(403).json({
            message : "Access Forbidden"
        })
    }

    res.status(200).json({
        message : "Post fetched Successfully", post
    })
}

module.exports = {
    createPostController, getPostController, getPostDetailsController
}