import React from "react";
import MessageCard from "./MessageCard"

function Messages(props){

    const posts = props.mesArr.map(message => {
        return (
            <MessageCard
                key = {message.id}
                id = {message.id}
                username = {message.username}
                messageColor = {message.color}
                timestamp = {message.timestamp}
                message = {message.message} />
        )
    })
    return (
    <div>
       {posts}
    </div>)   
}

export default Messages;