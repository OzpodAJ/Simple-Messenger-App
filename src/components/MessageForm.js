import React, { useState } from "react";
import Timestamp from "./Timestamp";
import PushMessage from "./Push";

function MessageForm({username, userColor}){
    const [userMessage, setUserMessage] = useState("")
    const [messageData, setMessageData] = useState({
        username: "",
        usercolor: "",
        messagetext: "",
    });

    function handleMessageChange(e){
        setUserMessage(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setMessageData({
            username: {username},
            color: {userColor},
            message: {userMessage},
            timestamp: {Timestamp},
        })
        console.log(messageData);
        // PushMessage(messageData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="textarea" onChange={handleMessageChange} value={userMessage} />
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default MessageForm;