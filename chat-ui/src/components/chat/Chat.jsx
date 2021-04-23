import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import { UserContext } from "../../UserContext";

let socket;

const Chat = (props) => {
  const ENDPT = "localhost:3001";
  const { user, setUser } = useContext(UserContext);
  const { room_id, room_name } = useParams();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket = io(ENDPT);
    socket.emit("join", {
      name: user.name,
      room_id: room_id,
      room_name: room_name,
      user_id: user.id,
    });
  }, [ENDPT]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      console.log("message");
      socket.emit("sendMessage", message, room_id, () => setMessage(""));
    }
  };
  return (
    <div>
      <div>
        {room_id} ,{room_name}
      </div>
      Chat {JSON.stringify(user)}
      message {message}
      <pre>{JSON.stringify(messages, null, "\t")}</pre>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={(event) =>
            event.key === "Enter" ? sendMessage(event) : null
          }
        />
      </form>
      <button>Send message</button>
    </div>
  );
};

Chat.propTypes = {};

export default Chat;
