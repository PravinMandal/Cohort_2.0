const userModel = require("../models/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


async function registerController(req, res) {
    const {username, email, password, bio} = req.body

    const doesUserExists = await userModel.findOne({
        $or : [
            {username},
            {email}
        ]
    })

    if(doesUserExists) {
        return res.status(409).json({
            message : (username === doesUserExists.username) ? "user with this username already exists" : "user with this email already exisits"
        })
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        username : username,
        email : email,
        password : hash, bio
    })

    const token = jwt.sign({
        id : user._id,
        username : user.username
    }, process.env.JWT_SECRET, {expiresIn : "3d"});

    res.cookie("token", token)

    res.status(201).json({
        message : "user successfully registered", 
        user : {
            username : user.username,
            email : user.email,
            bio : user.bio
        }
    })
}

async function loginController(req, res) {
    const {username, email, password} = req.body

    const user = await userModel.findOne({
        $or : [
            {username},
            {email}
        ]
    })

    if(!user) {
        return res.status(401).json({
            message : "invalid username or email"
        })
    }

    const isCorrectPass = await bcrypt.compare(password, user.password)

    if(!isCorrectPass) {
        return res.status(401).json({
            message : "invalid Password"
        })
    }

    const token = jwt.sign({
        id : user.id,
        username : user.username
    }, process.env.JWT_SECRET, {expiresIn : "1d"})

    res.cookie("token", token)

    res.status(200).json({
        message : "LoggedIn successfully", 
        user : {
            username : user.username,
            email : user.email
        }
    })
}

module.exports = {
    registerController, loginController
}