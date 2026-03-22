const express = require("express")
const authRouter = express.Router();
const jwt = require("jsonwebtoken")
const userModel = require("../models/user.model");
const crypto = require("crypto")
const cookieParser = require("cookie-parser");

authRouter.post("/register", async (req, res)=> {
    const {name, email, password} = req.body;

    const isEmailAlreadyExist = await userModel.findOne({email});
    if(isEmailAlreadyExist) {
        return res.status(409).json({
            message : "User with This Email Already Exists"
        })
    }

    //password ka hashing kr rhe hai
    //same input humesha same output dega, but jo hash rhega wo wapas normal password nhi bann skta
    //one way hota hai
    const hash = crypto.createHash("md5").update(password).digest("hex")

    const user = await userModel.create({
        name, email, password : hash
    })

    const token = jwt.sign({
            email : user.email,
            id : user._id
        }, process.env.JWT_SECRET
    )

    res.cookie("jwt-token", token)

    res.status(201).json({
        message : "User successfully Registered", user,
        token
    })

})

authRouter.post("/protected", (req, res)=> {
    console.log(req.cookies)
    res.status(200).json({
        message : "successfully acquired Token from user req"
    })
})

authRouter.post("/login", async (req, res)=> {
    const {email, password} = req.body
    const user = await userModel.findOne({email});
    if(!user) {
        return res.status(400).json({
            message : "User with this Email Doesn't Exists"
        })
    }
    const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex")
    if(!isPasswordMatched) {
        return res.status(401).json({
            message : "Invalid Password"
        })
    }
    const token = jwt.sign({
        id : user._id
    }, process.env.JWT_SECRET)

    res.cookie("JWT_TOKEN", token)

    res.status(200).json({
        message : "Successfully LoggedIn", user,
        token
    })
})

module.exports = authRouter