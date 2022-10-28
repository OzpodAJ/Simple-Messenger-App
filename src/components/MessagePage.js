import React, { useEffect } from "react";
import MessageForm from "./MessageForm"
import MessageCard from "./MessageCard";

function MessagePage({username, userColor}){
    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((r) => r.json())
            .then((mdata) => mdata.map(messageData => {
                return (
                    <MessageCard 
                        key = {messageData.id}
                        username = {messageData.username}
                        color = {messageData.color}
                        comment = {messageData.comment}
                        timestamp = {messageData.timestamp}
                    />
                )
            }))
    })
    return (
        <div>
            <div className = "messageBox">
                <h1>Welcome to the Ozpod</h1>
                <MessageCard />
            </div>
            <MessageForm 
                username = {username}
                userColor = {userColor}/>
        </div>
    )
}

export default MessagePage