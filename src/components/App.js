import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom"
import Login from "./Login";
import NavBar from "./NavBar"
import MessagePage from "./MessagePage"
import About from "./About";

function App() {
    const [username, setUsername] = useState("")
    const [userColor, setUserColor] = useState("#ff0000")
    // const [mesArr, setMesArr] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:3000/posts")
    //         .then((r) => r.json())
    //         .then((mdata) => setMesArr([...mdata]))
    //         // .then((mdata) => setMesArr([...mdata]))
    //         }, [])
    // console.log(mesArr)

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
