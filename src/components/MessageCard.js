import React from "react";

function MessageCard(props){
    return (
        <div className="messageCard" key={props.id}>
            <h3 style={{color: props.messageColor}}>{props.username}</h3><h4>{props.timestamp}</h4>
            <p>{props.comment}</p>
        </div>
    )
}

export default MessageCard;