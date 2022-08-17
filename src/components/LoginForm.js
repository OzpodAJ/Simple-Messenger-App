import React, { useState, useEffect } from "react";

function LoginForm(){
    const [username, setUsername] = useState("")
    const [userColor, setUserColor] = useState("")
    // const [submittedData, setSubmittedData] = useState([])

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handleColorChange(e) {
        setUserColor(e.target.value)
    }

    function handleDataSubmit(e) {
        e.preventDefault();
        const newUser = { username: username, userColor: userColor };
        //FETCH existing UserData from Server
        //Iterate through fetched Data
        //If username exists, set it's data to invisible fields in MessageForm
        //if username doesn't exist send newUser data to server and then do ^
        setUsername("")
        setUserColor("")
    }

    return (
        <div>
            <form onSubmit={handleDataSubmit}>
                <input type="text" onChange={handleUsernameChange} value = {username} />
                <input type="text" onChange={handleColorChange} value = {userColor} />
                <button type="submit">Login or Create User</button>
            </form>
        </div>
    )
}

export default LoginForm
