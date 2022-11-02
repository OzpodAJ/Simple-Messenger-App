import React from "react";
import LoginForm from "./LoginForm";

function Login({username, setUsername, userColor, setUserColor}) {
    return (
        <div>
            <h1 id="loginWelcome">Welcome to The Ozpod</h1>
            <LoginForm 
                username = {username}
                setUsername = {setUsername}
                userColor = {userColor}
                setUserColor = {setUserColor}
            />
        </div>
    )
}

export default Login;