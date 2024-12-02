import { useState } from "react";

function UseStateList() {
    const [artists, setArtists] = useState<string[]>([]);
    const [value, setValue] = useState<string>("");

    console.log(artists);

    return (
        <>
            <div>
                <input value={value} onChange={(e) => setValue(e.target.value)} />
                <button onClick={() => {
                    setArtists([
                        ...artists,
                        value
                    ]); // to re-render all component and see added
                    setValue("");
                }}>Add</button>
            </div>

            {artists.forEach((item) => {
                <>
                <p>{item.length}</p>
                </>
            })}
        </>
    );
}

export default UseStateList;