const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});


const authRoutes = require("./routes/auth.routes");
const songsRoutes = require("./routes/songs.routes");

app.use("/api/auth", authRoutes);
app.use("/api/songs", songsRoutes);

app.use((error, _req, res, _next) => {
  console.error("Unhandled API error:", error);
  res.status(500).json({ message: "Internal server error" });
});



module.exports = app;
