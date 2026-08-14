const mongoose = require("mongoose");

async function connectToDB() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing");
  }

  mongoose.set("bufferCommands", false);

  await mongoose.connect(process.env.MONGO_URI, {
    dbName: "Moodify",
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 5000,
  });

  console.log(`Connected to MongoDB database: "${mongoose.connection.name}"`);
}

module.exports = connectToDB;
