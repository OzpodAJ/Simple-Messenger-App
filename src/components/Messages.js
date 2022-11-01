import React, { useState, useEffect } from "react";
import MessageCard from "./MessageCard"

function Messages(){
    const [mesArr, setMesArr] = useState([])

    function fetchData() {
        fetch("http://localhost:3000/posts")
            .then((r) => r.json())
            .then((mdata) => setMesArr([...mdata]))
    }
    
    useEffect(() => {
        fetchData()
            const interval = setInterval(() => {
                fetchData()
                }, 5000)
                return() => clearInterval(interval)
            // .then((mdata) => setMesArr([...mdata]))
        }, [])
    const posts = mesArr.map(message => {
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