import React, { useState, useEffect } from "react";
import MessageCard from "./MessageCard"

function Messages(){    
    return (
    <div>
       { arr.map((a) => {<MessageCard
            key = {a.id} 
            username = {a.username}
            messageColor={a.color}
            timestamp={a.timestamp}
            message={a.comment}/>})}
    </div>)   
}

export default Messages;