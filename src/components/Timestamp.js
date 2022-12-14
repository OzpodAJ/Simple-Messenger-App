import React, {useState, useEffect} from "react";

function Timestamp() {
    const [dateState, setDateState] = useState(new Date());
    // function clickEvent(e){
    //     console.log(e.target)
    //   }
    useEffect(() => {
        const interval = setInterval(() => setDateState(new Date()), 30000)
        return() => clearInterval(interval);
    }, [])

    return (
        <div className="Clock">
            <p className="timestamp">
                {' '}
                {dateState.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })}
            </p>
        </div>
    )
}

export default Timestamp;