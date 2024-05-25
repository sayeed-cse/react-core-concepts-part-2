import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleRemove = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    return (
        <>
            <div className="counter">
                <h3>Counter: {count}</h3>
                <button onClick={handleAdd}>Increase</button>
                <button onClick={handleRemove} style={{marginLeft: '5px'}}>Decrese</button>
            </div>
        </>
    )
}