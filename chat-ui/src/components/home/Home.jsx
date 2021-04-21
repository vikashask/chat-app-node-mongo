import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Home = (props) => {
  const { user, setUser } = useContext(UserContext);
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

              <form>
                <div className="row">
                  <div className="input-field col s12">
                    <input
                      placeholder="Enter a room name"
                      id="room"
                      type="text"
                      className="validate"
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
      </div>

      <Link to={"/chat"}>
        <button>go to chat</button>
      </Link>
    </div>
  );
};

Home.propTypes = {};

export default Home;
