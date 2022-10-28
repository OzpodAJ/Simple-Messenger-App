import React from "react";

function PushMessage(props){
    fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(props),
    })
    .then(res => res.json())
    .then(newPost => console.log(newPost))
}