import React, { useState, useEffect } from "react";
import PushMessage from "./Push";

function MessageForm({username, userColor}){
    const [userMessage, setUserMessage] = useState("")
    const [messageData, setMessageData] = useState({});

    function handleMessageChange(e){
        await this.setUserMessage(e.target.value)
        const date = new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
        setMessageData({
            username: (username),
            color: (userColor),
            message: (userMessage),
            timeStamp: (date)
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(messageData);
        PushMessage(messageData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="textarea" onChange={handleMessageChange} value={userMessage} />
                <button type="submit" onClick={handleSubmit}>Send Message</button>
            </form>
        </div>
    )
}

export default MessageForm;