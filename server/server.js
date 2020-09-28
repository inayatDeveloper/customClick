const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require('cors')
const port = process.env.PORT || 4001,
  
    bodyParser = require('body-parser'),
    jwt = require('jsonwebtoken'),
    path = require('path');
const routes = require("./routes/index");
const app = express();

require("dotenv").config({
    path: path.join(__dirname, "../.env")
});

const server = http.createServer(app);
const io = socketIo(server);

app.use(cors())

app.use(function (req, res, next) {
    req.io = io;
    next();
});

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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



require("dotenv").config({
    path: path.join(__dirname, "./.env")
});



// app.use(async (req, res, next) => {
//     if (req.headers["x-access-token"]) {
//         try {
//             const accessToken = req.headers["x-access-token"];
//             const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);
//             // If token has expired
//             if (exp < Date.now().valueOf() / 1000) {
//                 return res.status(401).json({
//                     error: "JWT token has expired, please login to obtain a new one"
//                 });
//             }
//             res.locals.loggedInUser = await User.findById(userId);
//             next();
//         } catch (error) {
//             next(error);
//         }
//     } else {
//         next();
//     }
// });



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
app.use("/v1", routes);
server.listen(port, () => console.log(`Listening on port ${port}`));