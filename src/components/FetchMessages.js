import React, { useState } from "react";


function FetchMessages(){
    const [messageObj, setMessageObj] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((r) => r.json())
            .then((mdata) => setMessageObj(mdata))
            })
            
            
    return messageObj;

}

export default FetchMessages;
    