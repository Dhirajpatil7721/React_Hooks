import React, { useState } from 'react'
function Old_useState() {
    const startval = 0;
    const [num, setNum] = useState(0);

    const min = () => {
        if (num > 0) {
            setNum((v) => v - 1);
        }
    }
    const add5 = () => {
        for (let i = 0; i < 5; i++) {
            setNum((v) => v + 1);
        }
    }
    return (
        <div>
            <h2>Counter : {num}</h2>
            <button onClick={() => setNum((v) => v + 1)}>Increment</button>
            <button onClick={min}>Decrement</button>
            <button onClick={() => setNum(startval)}>Reset</button>
            <button onClick={add5}>Add 5</button>
        </div>
    )
}

export default Old_useState
