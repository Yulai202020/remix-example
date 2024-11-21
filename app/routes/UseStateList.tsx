import { useState } from "react";

function UseStateList() {
    const [artists, setArtists] = useState<string[]>([]);
    const [value, setValure] = useState("");

    return (
        <>
        {artists.map((item, index) => {
            <div key={index}>
                { item }
            </div>
        })}

        <input value={value} onChange={(e) => setValure(e.target.value)}></input>
        <button onClick={() => {
            setArtists([
                ...artists,
                value
            ]); // to re-render all component and see added
        }}>Add</button>
        </>
    );
}

export default UseStateList;