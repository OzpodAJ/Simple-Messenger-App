import React, { useState, useEffect } from "react";
import MessageCard from "./MessageCard"

function Messages(){
    const [mesArr, setMesArr] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((r) => r.json())
            .then((mdata) => setMesArr([...mdata]))
            // .then((mdata) => setMesArr([...mdata]))
            }, [])
    const posts = mesArr.map(message => {
        return (
            <MessageCard
                key = {message.id}
                username = {message.username}
                messageColor = {message.color}
                timestamp = {message.timestamp}
                message = {message.message} />
        )
    })
    console.log(posts)  
    return (
    <div>
       {posts}
    </div>)   
}

export default Messages;