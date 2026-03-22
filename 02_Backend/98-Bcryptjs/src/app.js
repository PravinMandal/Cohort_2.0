const express = require("express")
const app = express();
const userModel = require("./models/user.model")
const authRouter = require("./routes/auth.route")
const cookieParser = require("cookie-parser")

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRouter)

module.exports = app;