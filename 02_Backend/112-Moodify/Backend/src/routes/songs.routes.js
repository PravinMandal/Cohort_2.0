const express = require("express");
const router  = express.Router();
const upload = require("../middlewares/upload.middleware");
const songsController = require("../controllers/song.controller");

router.post("/", upload.single("song"), songsController.uploadSong);

router.get("/", songsController.getSong)

module.exports = router;