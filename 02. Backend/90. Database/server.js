// server ko start krna 
// database se connect krna

const app = require("./src/app")
const mongoose = require("mongoose")

function connectToDb() {
    mongoose.connect("mongodb+srv://pravinmandalp45_db_user:Tz05xIGzE0ACuZK1@cluster0.usuud8z.mongodb.net/day-90").then(
        ()=> {
            console.log("connected to database");
        }
    )
}

connectToDb();

app.listen(3000, ()=> {
    console.log("server is running on port 3000")
})