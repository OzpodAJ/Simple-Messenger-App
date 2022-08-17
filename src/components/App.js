import React from "react";
import { Route, Switch } from "react-router-dom"
import Login from "./Login";
import NavBar from "./NavBar"
import MessagePage from "./MessagePage"

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path = "/">
          <Login />
        </Route>
        <Route path = "/MessageBoard">
          <MessagePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
