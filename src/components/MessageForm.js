import React, { useState } from "react";
import { useHistory } from "react-router-dom"

function MessageForm({username, userColor, mesArr, setMesArr}){
    const [messageData, setMessageData] = useState()
    const history = useHistory();

    function handleMessageChange(e){
        setMessageData(e.target.value);
    }
   
    function handleSubmit(e) {
        e.preventDefault();
        const date = new Date().toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        })
        const newMessageData = {
            username: (username),
            color: (userColor),
            message: (messageData),
            timestamp: (date)
        }
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newMessageData),
        })
            .then(res => res.json())
            .then(newPost => setMesArr([...mesArr, newPost]))
}
        


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="textarea" id="textBox" onInput={handleMessageChange} value={messageData}/>
                <button type="submit" id="messageSubmit" onClick={handleSubmit} >Send Message</button>
                <button type="button" id="logoutButton" onClick={() => history.push("/home")}>Logout</button>
            </form>
        </div>
    )
}

export default MessageForm;