import React, { useMemo, useState } from 'react'

function Use_memo1() {
    const [number, setNumber] = useState(0)
    const [counter, serCounter] = useState(0)

    const Cubenum = (num) => {
        console.log("Done !");
        return Math.pow(num, 3)
    }

    // const result = Cubenum(number);
    const result = useMemo(()=>Cubenum(number),[number]);

    return (
        <div>
            <input type="number" value={number} onChange={(e) => { setNumber(e.target.value) }} />
            <h1>Cube of tha number is : {result}</h1>
            <hr />
            <button onClick={() => { serCounter(counter => counter + 1) }}>Counter</button>
            <h1>Counter {counter}</h1>
        </div>
    )
}

export default Use_memo1
