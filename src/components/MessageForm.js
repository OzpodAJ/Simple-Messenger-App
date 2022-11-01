import React, { useState } from "react";
import PushMessage from "./Push";

function MessageForm({username, userColor}){
    const [userMessage, setUserMessage] = useState("")
    const [messageData, setMessageData] = useState({});

    function handleMessageChange(e){
        setUserMessage(e.target.value, " ")
        const date = new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
        setMessageData({
            username: (username),
            color: (userColor),
            message: (userMessage),
            timestamp: (date)
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        PushMessage(messageData);
        setUserMessage("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="textarea" onInput={handleMessageChange} value={userMessage} />
                <button type="submit" onClick={handleSubmit}>Send Message</button>
            </form>
        </div>
    )
}

export default MessageForm;