import React from "react";
import MessageForm from "./MessageForm"
import Messages from "./Messages"

function MessagePage({username, userColor}){
    return (
        <div>
            <h1 id="Page-Topper">Welcome to the Ozpod</h1>
            <div className = "messageBox">
                <Messages />

            </div>
            <MessageForm 
                username = {username}
                userColor = {userColor}/>
        </div>
    )
}

export default MessagePage