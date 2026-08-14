const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    posterUrl: {
        type: String,
        required: true,
    },
    mood: {
        type: String,
        enum: {
            values: ["sad", "happy", "surprised"],
            message: "This is Enum"
        }
    }
})

const songModel = mongoose.model("songs", songSchema);

module.exports = songModel;