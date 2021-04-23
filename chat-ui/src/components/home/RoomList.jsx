import React from "react";
import { Link } from "react-router-dom";
import Room from "../home/Room";
const RoomList = ({ rooms }) => {
  return (
    <div>
      {rooms &&
        rooms.map((room) => (
          <Link to={"/chat/" + room._id + "/" + room.name} key={room._id}>
            <Room name={room.name} />
          </Link>
        ))}
    </div>
  );
};

RoomList.propTypes = {};

export default RoomList;
