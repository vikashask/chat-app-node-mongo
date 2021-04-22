import React from "react";

const Room = ({ name }) => {
  return (
    <div class="card horizontal">
      <div className="card-stacked">
        <div className="card-content">{name}</div>
      </div>
    </div>
  );
};

Room.propTypes = {};

export default Room;
