import { useState } from "react";

function UseStateExample() {
    const [count, setCount] = useState<number>(0);
    return (
        <div>
            <div>
                {count}
            </div>
            <button onClick={(e) => {
                setCount(count + 1); // в данном рендере count всегда 0 даже если ты его изменил
                setCount(count + 1); // тут будет 1

                alert(count); // 0 потому что count в этом рендере ВСЕГДА 0

                setCount((n) => n + 1); // это callback функция она не заменяет в прибовляет 1

                // в итоге мы прибаливи 2
            }}>Add 1</button>
        </div>
    )
}

export default UseStateExample;