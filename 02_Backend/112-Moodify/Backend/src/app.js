const express = require("express");
const cookieParser = require("cookie-parser");
const 
const app = express();

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", require("authRoutes"));

app.use(express.json());
module.exports = app;