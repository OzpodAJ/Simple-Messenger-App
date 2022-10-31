import React, { useState, useEffect } from "react"

function useFetch(){
    const [mesArr, setMesArr] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((r) => r.json())
            .then((mdata) => setMesArr([...mdata]))
            // .then((mdata) => setMesArr([...mdata]))
            }, [])
}

export default useFetch;