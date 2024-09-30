import { useState } from "react";

export function Counter () {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <div onClick={increment}>Counter {counter}</div>
        </>
    )
}
