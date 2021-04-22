const express = require("express");
const app = express();
const cors = require("cors");

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});
const PORT = process.env.PORT || 3001;

// app.use(cors());

// use it before all route definitions
app.use(cors({ origin: "http://localhost:3000" }));

// app.get("/", (req, res) => {
//   res.send("Welcome");
//   // res.sendFile(__dirname + "/index.html");
// });

io.on("connection", (socket) => {
  console.log("connected");
});

server.listen(PORT, () => {
  console.log(`listening on *: ${PORT}`);
});
