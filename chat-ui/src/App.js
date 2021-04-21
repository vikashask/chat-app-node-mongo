import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Home from "./components/home/Home";
import Navbar from "./layout/Navbar";
import { UserContext } from "./UserContext";
function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div>
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
