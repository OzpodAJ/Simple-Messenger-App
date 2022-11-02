import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import PushMessage from "./Push";

function MessageForm({username, userColor, mesArr, setMesArr}){
    const [messageData, setMessageData] = useState({message: ""})
    const history = useHistory();

    function handleMessageChange(e){
        const date = new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
        setMessageData({
            username: (username),
            color: (userColor),
            message: e.target.value,
            timestamp: (date)
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        PushMessage(messageData, mesArr);
        setMesArr([...mesArr, messageData])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="textarea" id="textBox" onInput={handleMessageChange} value={messageData.message}/>
                <button type="submit" id="messageSubmit" onClick={handleSubmit}>Send Message</button>
                <button type="button" id="logoutButton" onClick={() => history.push("/home")}>Logout</button>
            </form>
        </div>
    )
}

export default MessageForm;