import React, { useState, useEffect } from "react";
import { renderToString } from 'react-dom/server'
import Timestamp from "./Timestamp";
import PushMessage from "./Push";

function MessageForm({username, userColor}){
    const [userMessage, setUserMessage] = useState("")
    const [messageData, setMessageData] = useState({});

    function handleMessageChange(e){
        setUserMessage(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const date = new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
        setMessageData({
            "username": {username},
            "color": {userColor},
            "message": {userMessage},
            "timeStamp": {date}
        });
        console.log(messageData);
        // PushMessage(messageData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Timestamp />
                <input type="textarea" onChange={handleMessageChange} value={userMessage} />
                <button type="submit" onClick={handleSubmit}>Send Message</button>
            </form>
        </div>
    )
}

export default MessageForm;