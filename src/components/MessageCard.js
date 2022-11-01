import React from "react";

function MessageCard(props){
    return (
        <div className="messageCard" key={props.id} id={"card" + props.id}>
            <h3 style={{color: props.messageColor}} className="username">{props.username}</h3>
            <h4 className="time">{props.timestamp}</h4>
            <p className="message">{props.message}</p>
        </div>
    );
}

export default MessageCard;