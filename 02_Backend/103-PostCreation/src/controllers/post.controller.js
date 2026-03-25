const ImageKit = require("@imagekit/nodejs")
const {toFile} = require("@imagekit/nodejs")
const jwt = require("jsonwebtoken");
const postModel = require("../models/post.model");
const { Folders } = require("@imagekit/nodejs/resources.js");

const client = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY']
});

async function postController (req, res) {

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


    const post = postModel.create({
        caption : req.body.caption,
        imgUrl : file.url,
        user : decoded.id
    })

    res.status(201).json({
        message : "succefull"
    })

}


module.exports = postController