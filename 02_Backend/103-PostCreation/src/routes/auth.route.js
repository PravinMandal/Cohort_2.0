const express = require("express")
const { authController, loginController } = require("../controllers/auth.controller")
const authRouter = express.Router()



authRouter.post("/register", authController)

authRouter.post("/login", loginController)


module.exports = authRouter