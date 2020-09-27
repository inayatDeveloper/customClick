const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const cors = require('cors')
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const app = express();

const server = http.createServer(app);
const io = socketIo(server);
app.use(cors())
app.use(function(req, res, next) {
    req.io = io;
    next();
});
app.use(index);
let interval;
io.on("connection", socket => {
    console.log("New client connected");
    if (interval) {
        clearInterval(interval);
    }
    // interval = setInterval(() => getApiAndEmit(socket), 10000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});



const getApiAndEmit = async socket => {
    try {
        // const res = await axios.get(
        //     "https://api.darksky.net/forecast/PUT_YOUR_API_KEY_HERE/43.7695,11.2558"
        // ); // Getting the data from DarkSky
        socket.emit("FromAPI", "wellcome3333"); // Emitting a new message. It will be consumed by the client
    } catch (error) {
        console.error(`Error: ${error.code}`);
    }
};
server.listen(port, () => console.log(`Listening on port ${port}`));