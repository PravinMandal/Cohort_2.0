const express = require("express")
const noteModel = require("./models/notes.model")
const app = express();
app.use(express.json())

//post
app.post("/notes", async (req, res)=> {
    const {title, description} = req.body
    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message : "Note Created Succesfully", note
    })
})

//get
app.get("/notes", async (req, res)=> {
    const allNote = await noteModel.find()
    res.status(200).json({
        message : "Notes fetched Succesfully", allNote
    })
})


module.exports = app