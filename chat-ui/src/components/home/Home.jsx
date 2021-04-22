import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { UserContext } from "../../UserContext";
import RoomList from "../home/RoomList";

let socket;
const Home = (props) => {
  const ENDPT = "localhost:3001";
  useEffect(() => {
    socket = io(ENDPT);
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPT]);

  const { user, setUser } = useContext(UserContext);
  const [room, setRoom] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    socket.emit("create-room", room);
    console.log("room");
    setRoom("");
  };
  const rooms = [
    {
      name: "room1",
      _id: "123",
    },
    {
      name: "room2",
      _id: 23,
    },
  ];
  const setAsVikash = () => {
    const vikash = {
      name: "vikash",
      email: "vikashraj144@gmail.com",
      password: "123",
      id: "123",
    };
    setUser(vikash);
  };
  const setAsJay = () => {
    const jay = {
      name: "jay",
      email: "jay@gmail.com",
      password: "1234",
      id: "1234",
    };
    setUser(jay);
  };

  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">
                Welcome {user ? user.name : ""}
              </span>

              <form onSubmit={handelSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter a room name"
                      id="room"
                      type="text"
                      className="validate"
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                    />
                    <label htmlFor="room">Room</label>
                  </div>
                </div>
                <button className="btn">Create Room</button>
              </form>
            </div>
            <div className="card-action">
              <a href="#" onClick={setAsVikash}>
                Set as vikash
              </a>
              <a href="#" onClick={setAsJay}>
                Set as jay
              </a>
            </div>
          </div>
        </div>
        <div className="col s6 m5 offset-1">
          <RoomList rooms={rooms} />
        </div>
      </div>

      <Link to={"/chat"}>
        <button>go to chat</button>
      </Link>
    </div>
  );
};

Home.propTypes = {};

export default Home;
