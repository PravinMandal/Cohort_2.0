const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

async function registerController (req, res) {
    const {username, email, password, bio, profileImage} = req.body

    const userExists = await userModel.findOne({
        $or : [
            {username : username},
            {email : email}
        ]
    })

    if(userExists) {
        return res.status(401).json({
            message : (userExists.username == username) ? "user with this username already exists" : "user with this email already exists"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username, email, password : hash, bio, profileImage
    })

    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET, {expiresIn : "1d"})

    res.cookie("token", token)

    res.status(200).json({
        message : "user successfully registered", 
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
            message : "user with this username or email does not exists"
        })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if(!isPasswordCorrect) {
        return res.status(409).json({
            message : "Invalid Password"
        })
    }

    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET, {expiresIn : "1d"})

    res.cookie("token", token)

    res.status(200).json({
        message : "LoggedIn successfully",
        user : {
            username : user.username,
            email : user.email,
            bio : user.bio,
            profileImage : user.profileImage
        }
    })
}

module.exports = {
    registerController, loginController
}

