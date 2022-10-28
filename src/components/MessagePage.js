import React, { useEffect, useState } from "react";
import MessageForm from "./MessageForm"
import MessageCard from "./MessageCard";

function MessagePage({username, userColor}){
    const [messageId, setMessageId] = useState("0")
    const [userId, setUserId] = useState("Phillip H. Lanier")
    const [idColor, setIdColor] = useState("#6f456e")
    const [userComment, setUserComment] = useState("No Comment")
    const [timestamp, setTimestamp] = useState("null")

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((r) => r.json())
            .then((mdata) => mdata.map((messageData) => {
                setMessageId(messageData.id)
                setIdColor(messageData.color)
                setUserId(messageData.username)
                setTimestamp(messageData.timestamp)
                setUserComment(messageData.comment)
            }))
            })

    return (
        <div>
            <div className = "messageBox">
                <h1>Welcome to the Ozpod</h1>
                <MessageCard
                    key = {messageId} 
                    username = {userId}
                    color={idColor}
                    timestamp={timestamp}
                    comment={userComment}/>
            </div>
            <MessageForm 
                username = {username}
                userColor = {userColor}/>
        </div>
    )
}

export default MessagePage