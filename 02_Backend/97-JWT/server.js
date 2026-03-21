require('dotenv').config()
const mongoose = require("mongoose")
const app = require("./src/app")
const connectToDb = require("./src/config/database")

connectToDb()

app.listen(3000, ()=> {
    console.log("Server is Running of Port 3000")
})