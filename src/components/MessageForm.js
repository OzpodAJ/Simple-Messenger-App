import React, { useState } from "react";
import Timestamp from "./Timestamp";

function MessageForm({username, userColor}){
    const [userMessage, setUserMessage] = useState("")
    const [date, setDate] = useState(Date.now())
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
            usercolor: {userColor},
            messagetext: {userMessage}
        })
        console.log(messageData)
    }

    return (
        <div>
            <p>{username}</p>
            <Timestamp />
            <form onSubmit={handleSubmit}>
                <input type="textarea" onChange={handleMessageChange} value={userMessage} />
                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}

export default MessageForm;