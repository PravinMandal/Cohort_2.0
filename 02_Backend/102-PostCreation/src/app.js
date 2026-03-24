const express = require("express");
const authRouter = require("./routes/auth.route");
const postRouter = require("./routes/post.route");
const app = express();
app.use(express.json());

app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter)

module.exports = app;