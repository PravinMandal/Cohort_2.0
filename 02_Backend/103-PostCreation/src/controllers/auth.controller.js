const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


async function authController (req, res) {
    const {username, email, password, bio, profileImage} = req.body

    const isUserExist = await userModel.findOne({
        $or : [
            {username},
            {email}
        ]
    })

    if(isUserExist) {
        return res.status(409).json({
            message : (isUserExist.username === username) ? "user with this username already exists" : "user with this email already exisits"
        })
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username, email, password : hash, bio, profileImage
    })

    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET, {expiresIn : "1d"})

    res.cookie("token", token)

    res.status(201).json({
        message : "user Succefully registered",
        user : {
            username : user.username,
            email : user.email,
            bio : user.bio,
            profileImage : user.profileImage
        }
    })
}


async function loginController (req, res) {
    const {username, email, password} = req.body

    const user = await userModel.findOne({
        $or : [
            {username},
            {email}
        ]
    })

    if(!user) {
        return res.status(409).json({
            message : "user with this username or password does not exisits"
        })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if(!isPasswordCorrect) {
        return res.status(401).json({
            message : "Invalid password"
        })
    }

    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET, {expiresIn : "1d"})

    res.cookie("token", token)

    res.status(200).json({
        message : "LoggedIn Succefully"
    })
}


module.exports = {
    authController, loginController
}