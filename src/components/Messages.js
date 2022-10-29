import React, { useState, useEffect } from "react";
import MessageCard from "./MessageCard"

function Messages(){
    const [mesObj, setMesObj] = useState({})
    const [messageId, setMessageId] = useState("0")
    const [userId, setUserId] = useState("Phillip H. Lanier")
    const [idColor, setIdColor] = useState("#6f456e")
    const [userComment, setUserComment] = useState("No Comment")
    const [timestamp, setTimestamp] = useState("null")
    
    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((r) => r.json())
            .then((mdata) => setMesObj(mdata))
            }, [])

    const messageDisplay = mesObj.map(message => {
        return (
            <MessageCard
                key = {message.id} 
                username = {message.username}
                messageColor={message.color}
                timestamp={message.timestamp}
                message={message.message}/>
        )
    })
    return (
        <p>fuck</p>
    )
}

export default Messages;