import React, { useState, useEffect } from "react";
import MessageForm from "./MessageForm"
import Messages from "./Messages"

function MessagePage({username, userColor}){
    const [mesArr, setMesArr] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((r) => r.json())
            .then((mdata) => setMesArr(mdata))
        }, [])
    return (
        <div>
            <h1 id="Page-Topper">Welcome to the Ozpod</h1>
            <div className = "messageBox">
                <Messages 
                    mesArr = {mesArr}/>

            </div>
            <MessageForm 
                username = {username}
                userColor = {userColor}
                mesArr = {mesArr}
                setMesArr = {setMesArr}/>
        </div>
    )
}

export default MessagePage