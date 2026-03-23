const userModel = require("../models/user.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")

async function registerController(req, res) {
    const {username, password, email, profileImage, bio} = req.body

    const doesUserExists = await userModel.findOne({
        $or : [
            {username},
            {email}
        ]
    })

    if(doesUserExists) {
        return res.status(409).json({
            message : (doesUserExists.username === username) ? "user with this username already exists" : "user with this email already exists"
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest("hex")

    const user = await userModel.create({
        username,
        password : hash,
        email,
        bio
    })

    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message : "user Successfully Registered",
        user : {
            username : user.username,
            email : user.email,
            profileImage : user.profileImage,
            bio : user.bio
        }
    })
}

async function loginController (req, res) {
    const {username, email, password} = req.body

    const user = await userModel.findOne({
        $or : [
            {username : username},
            {email : email}
        ]
    })

    if(!user) {
        return res.status(409).json({
            message : "user with this username or email does not exists"
        })
    }

    const isCorrectPassword = user.password === crypto.createHash("sha256").update(password).digest("hex")

    if(!isCorrectPassword) {
        return res.status(401).json({
            message : "Invalid Credentials"
        })
    }

    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message : "user logged in Successfully",
        user : {
            username : user.username,
            email : user.email,
            bio : user.bio,
            profileImage : user.profileImage
        }
    })
}

module.exports = {
    registerController,
    loginController
}