import app from "./src/app.js"
import {createServer} from "http";
import {Server} from "socket.io";

const httpServer = createServer(app);
const io = new Server(httpServer, {});

io.on("connection", (socket)=> {
    console.log("A user connected");
    socket.on("message", (message)=> {
        console.log(`A Message is Fired : ${message}`);
        io.emit("abc", message)
    })
})

// socket.emit()
// socket.broadcast().emit()
// io.emit();

httpServer.listen(3000, ()=> {
    console.log("server is running on port 3000")
})