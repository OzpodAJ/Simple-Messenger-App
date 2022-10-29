import React, { useEffect, useState } from "react";
import MessageForm from "./MessageForm"
import Messages from "./Messages"

function MessagePage({username, userColor}){
    return (
        <div>
            <div className = "messageBox">
                <h1>Welcome to the Ozpod</h1>
                <Messages />

            </div>
            <MessageForm 
                username = {username}
                userColor = {userColor}/>
        </div>
    )
}

export default MessagePage