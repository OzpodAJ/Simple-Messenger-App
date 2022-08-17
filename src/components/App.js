import React from "react";
import { Route, Switch } from "react-router-dom"
import Login from "./Login";
import NavBar from "./NavBar"
import MessagePage from "./MessagePage"
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path = "/messageBoard">
          <MessagePage />
        </Route>
        <Route path = "/about">
          <About />
        </Route>
        <Route path = "/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
