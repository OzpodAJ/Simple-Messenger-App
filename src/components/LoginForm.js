import React from "react";
import { useHistory } from "react-router-dom"

function LoginForm({username, setUsername, userColor, setUserColor}){
    //define in APP.js pass to login and message
    const history = useHistory();

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function handleColorChange(e) {
        setUserColor(e.target.value)
    }

    function handleLoginButton(e) {
        e.preventDefault();
        //send user to /messageboard page
        console.log(document.querySelector("#username").value)
        console.log(document.querySelector("#color").value)
    }

    return (
        <div>
            <form onSubmit={handleLoginButton}>
                <p className="formText">Username:</p>
                <input type="text" id="username" onChange={handleUsernameChange} value = {username} />
                <p className="formText">User Color:</p>
                <input type="color" id="color" onChange={handleColorChange} value = {userColor} />
                <button type="submit" id="login-button" onClick={() => history.push("/messageboard")}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm
