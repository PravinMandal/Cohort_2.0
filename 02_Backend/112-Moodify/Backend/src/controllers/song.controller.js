const songModel = require("../models/songs.model");
const storageService = require("../services/storage.service");
const id3 = require("node-id3");

async function uploadSong(req, res) {
  try {
    const songBuffer = req.file.buffer;
    const { mood } = req.body;

    const tags = id3.read(songBuffer) || {};
    const title = tags.Title || tags.title || "Untitled";
    const imageBuffer =
      tags.Image?.ImageBuffer ||
      tags.image?.imageBuffer ||
      tags.image?.buffer;

    // 1. Prepare upload promises
    const songUploadPromise = storageService.uploadFile({
      buffer: songBuffer,
      fileName: `${title}.mp3`,
      folder: "/Cohort-2/Moodify/Songs",
    });

    const posterUploadPromise = imageBuffer
      ? storageService.uploadFile({
          buffer: imageBuffer,
          fileName: `${title}.jpeg`,
          folder: "/Cohort-2/Moodify/Posters",
        })
      : Promise.resolve(null);

    // 2. Upload song and poster concurrently with Promise.all.
    // isse kam time lagega kyuki ek sath upload hoga, ek ke baad ek nhi
    const [songFile, posterFile] = await Promise.all([
      songUploadPromise,
      posterUploadPromise,
    ]);

    // 3. Create Song Document in MongoDB
    const song = await songModel.create({
      title,
      url: songFile.url,
      posterUrl: posterFile ? posterFile.url : "",
      mood,
    });

    return res.status(201).json({
      message: "Song Created Successfully",
      song,
    });
  } catch (error) {
    console.error("Upload Song Error:", error);
    return res.status(500).json({ message: error.message || "Failed to upload song" });
  }
}

async function getSong(req, res) {
    const {mood} = req.query

    const song = await songModel.findOne({mood})

    res.status(200).json({
        message: "song fetched successfully.",
        song
    })
}

module.exports = {
  uploadSong, getSong
};
