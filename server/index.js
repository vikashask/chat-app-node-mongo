const express = require("express");
const app = express();
const cors = require("cors");

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const { addUser, removeUser, getUser } = require("./helper.js");
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

io.on("connection", (socket) => {
  socket.on("create-room", (name) => {
    console.log("🚀 ~ file: index.js ~ line 23 ~ io.on ~ name", name);
  });

  socket.on("join", ({ name, room_id, user_id }) => {
    const { error, user } = addUser({
      socket_id: socket.id,
      name,
      room_id,
      user_id,
    });
    socket.join(room_id);

    if (error) {
      console.log("Join error", error);
    } else {
      console.log("join user");
    }
  });
  console.log("connected");

  socket.on("sendMessage", (message, room_id, callback) => {
    const user = getUser(socket.id);
    const msgToStore = {
      name: user.name,
      user_id: user.user_id,
      room_id,
      text: message,
    };
    console.log(
      "🚀 ~ file: index.js ~ line 51 ~ socket.on ~ msgToStore",
      msgToStore
    );
    io.to(room_id).emit("message", msgToStore);
    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`listening on *: ${PORT}`);
});
