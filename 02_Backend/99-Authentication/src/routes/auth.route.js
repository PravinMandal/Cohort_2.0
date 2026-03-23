const express = require("express")
const noteModel = require("../models/user.model")
const authRouter = express.Router();
const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const crypto = require("crypto");
const userModel = require("../models/user.model");

authRouter.post("/register", async (req, res)=> {
    const {name, email, password} = req.body;
    const userExist = await noteModel.findOne({email});
    if(userExist) {
        return res.status(409).json({
            message : "User with this Email Already Exists"
        })
    }

    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await noteModel.create({
        name, email, password : hash
    })

    const token = jwt.sign({
        email : user.email,
        id : user._id
    }, process.env.JWT_SECRET, {expiresIn : "5h"}) //expires in 5 hours, fir login krna pdega

    res.cookie("token", token)

    res.status(200).json({
        message : "User Successfully Registered", user, token
    })

})

authRouter.post("/login", async (req, res)=> {
    const {email, password} = req.body

    const user = await userModel.findOne({email})
    if(!user) {
        return res.status(400).json({
            message : "User with this Email Doesn't Exist"
        })
    }

    const isCorrectPassword = user.password === crypto.createHash("md5").update(password).digest("hex")
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
        message : "Successfully LoggedIn"
    })
})

authRouter.get("/get-me", async (req, res)=> {
    const token = req.cookies.token
    const decode = jwt.verify(token, process.env.JWT_SECRET)
    const user = await userModel.findById(decode.id)

    res.status(200).json({
        message : "user Successfully Fetched", 
        name : user.name,
        email : user.email
    })
})


module.exports = authRouter