const express = require("express")
const app = express()
const noteModel = require("./models/note.model")
const path = require("path")
const cors = require("cors")

app.use(express.static("./public"))
app.use(express.json())
app.use(cors())

app.post("/notes",async (req, res)=> {
    const {title, description} = req.body
    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message : "Note created Successfully", note
    })
})

app.get("/notes", async (req, res)=> {
    const allnote = await noteModel.find();
    res.status(200).json({
        message : "All notes Successfully Fetched", allnote
    })
})

app.delete("/notes/:note_id", async (req, res)=> {
    const noteid = req.params.note_id;
    await noteModel.findByIdAndDelete(noteid)
    res.status(200).json({
        message : "Note deleted Successfully"
    })
})

app.patch("/notes/:note_id", async (req, res)=> {
    const {description} = req.body
    const noteid = req.params.note_id
    await noteModel.findByIdAndUpdate(noteid, {description})
    res.status(200).json({
        message : "Note Updated Successfully"
    })
})

app.use('*name', (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

module.exports = app