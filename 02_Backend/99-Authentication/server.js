require("dotenv").config()
const app = require("./src/app")
const mongoose = require("mongoose")
const connectToDb = require("./src/config/database")
const cookieParser = require("cookie-parser")

connectToDb();

app.listen(3000, ()=> {
    console.log("Server is running of port 3000");
})