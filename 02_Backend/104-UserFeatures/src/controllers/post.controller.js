const ImageKit = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken");
const postModel = require("../models/post.model");

const client = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'], // This is the default and can be omitted
});

async function createPostController(req, res) {
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

    const file = await client.files.upload({
        file: await ImageKit.toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: 'fileName',
    });

    const post = await postModel.create({
        caption : req.body.caption,
        imgUrl : file.url,
        user : decoded.id
    })

    res.status(201).json({
        message : "Post successfully created", 
        post
    })
}

async function getPostController(req, res) {
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

    const posts = await postModel.find({
        user : decoded.id
    })

    res.status(200).json({
        message : "All Post successfully Fetched",
        posts
    })
}

async function getPostDetailsController(req, res) {
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

    const user = decoded.id
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(!post) {
        return res.status(404).json({
            message : "Post unavailable"
        })
    }

    const isValidUser = post.user.toString() === user

    if(!isValidUser) {
        return res.status(401).json({
            message : "Unauthorized Access"
        })
    }

    res.status(200).json({
        message : "Post successfully Fetched",
        post
    })
}

module.exports = {
    createPostController, getPostController, getPostDetailsController
}