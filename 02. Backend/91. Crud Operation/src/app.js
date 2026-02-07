const express = require("express")
const notemodel = require("./models/notes.model")
const app = express();
app.use(express.json())

//post
app.post("/notes", async (req, res)=> {
    const {title, description} = req.body
    const note = await notemodel.create({
        title, description
    })
    res.status(201).json({
        message : "Note created Successfully", note
    })
})

//get
app.get("/notes", async (req, res)=> {
    const allnotes = await notemodel.find()
    res.status(200).json({
        message : "Notes fetched Successfully", allnotes
    })
})
module.exports = app;