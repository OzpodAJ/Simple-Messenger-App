import React, {useState, useEffect} from "react";

function Timestamp() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, [])

    return (
        <div className="Clock">
            <p>
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