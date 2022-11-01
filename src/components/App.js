import React, { useState } from "react";
import { Route, Switch } from "react-router-dom"
import Login from "./Login";
import NavBar from "./NavBar"
import MessagePage from "./MessagePage"
import About from "./About";

function App() {
    const [username, setUsername] = useState("Anonymous")
    const [userColor, setUserColor] = useState("#ff0000")

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path = "/messageBoard">
          <MessagePage 
            username = {username}
            userColor = {userColor}/>
        </Route>
        <Route path = "/about">
          <About />
        </Route>
        <Route path = "/">
          <Login 
            username = {username} 
            setUsername = {setUsername}
            userColor = {userColor}
            setUserColor = {setUserColor} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
