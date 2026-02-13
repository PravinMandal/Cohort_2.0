const express = require("express")
const noteModel = require("./models/note.model")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())

app.post("/notes", async (req, res)=> {
    const {title, description} = req.body
    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message : "Note Succesfully Created", note
    })
})

app.get("/notes", async (req, res)=> {
    const allnote = await noteModel.find()
    res.status(200).json({
        message : "Notes Succesfully fetched", allnote
    })
})

app.delete("/notes/:id", async (req, res)=> {
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message : "Note Succesfully Deleted"
    })
})

app.patch("/notes/:id", async (req, res)=> {
    const {description} = req.body
    const id = req.params.id
    await noteModel.findByIdAndUpdate(id, {description})
    res.status(200).json({
        message : "Note Updated Succesfully"
    })
})

module.exports = app