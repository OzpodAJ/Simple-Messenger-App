import React, { useEffect, useState } from "react";
import MessageForm from "./MessageForm"
import MessageCard from "./MessageCard";

function MessagePage({username, setUsername, userColor, setUserColor}){
    const [userId, setUserId] = useState("")
    const [userComment, setUserComment] = useState("No Comment")
    const [timestamp, setTimestamp] = useState("1-21-2000")

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((r) => r.json())
            .then((mdata) => {
                setUserId(mdata.id)
                setUserColor(mdata.color)
                setUsername(mdata.username)
                setTimestamp(mdata.timestamp)
                setUserComment(mdata.comment)
            })})

    return (
        <div>
            <div className = "messageBox">
                <h1>Welcome to the Ozpod</h1>
                <MessageCard
                    key = {userId} 
                    username = {username}
                    color={userColor}
                    timestamp={timestamp}
                    userComment={userComment}/>
            </div>
            <MessageForm 
                username = {username}
                userColor = {userColor}/>
        </div>
    )
}

export default MessagePage