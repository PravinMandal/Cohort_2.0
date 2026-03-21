const express = require("express")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const authRouter = express.Router();

authRouter.post("/register", async (req, res)=> {
    const {name, email, password} = req.body
    const emailAlreadyExists = await userModel.findOne({email})
    if(emailAlreadyExists) {
        return res.status(409).json({
            message : "User With this Email Already Exist"
        })
    }
    const user = await userModel.create({
        name, email, password
    })

    const token = jwt.sign(
        {
            id : user._id,
            email : user.email
        },
        process.env.JWT_SECRET
    )

    res.cookie("jwt-token", token)

    res.status(201).json({
        message : "User Successfully Registered", user,
        token
    })
})

module.exports = authRouter