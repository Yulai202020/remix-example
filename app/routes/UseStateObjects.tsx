import { useState } from "react";

function UseStateObjects() {
    const [coords, setCoords] = useState({
        x: 50,
        y: 50
    });

    return (
        <div style={{height: "100vh", width: "100vw", position: "absolute"}}>
            <button
                onClick={() => {
                    setCoords(prevCoords => ({
                        x: prevCoords.x,
                        y: prevCoords.y + 50
                    }));
                }}
            >
                Move 50 pixels down.
            </button>
            <div
                style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    position: "absolute",
                    top: `${coords.y}px`,
                    left: `${coords.x}px`
                }}
            ></div>
        </div>
    );
}

export default UseStateObjects;
