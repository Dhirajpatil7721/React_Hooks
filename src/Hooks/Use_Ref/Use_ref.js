import React, { useState, useEffect, useRef } from 'react'

function Use_ref() {
    const [value, setValue] = useState(0)

    const count = useRef(0)
    
    useEffect(() => {
        count.current = count.current + 1
    })

    const reset=() => {
        setValue(0);
    };
    return (
        <div>
            <button onClick={() => { setValue(prev => prev - 1) }}>-1</button>
            <h1>{value}</h1>
            <button onClick={() => { setValue(prev => prev + 1) }}>+1</button>
            <button onClick={reset}>reset</button>

            <h1>Render Count : {count.current}</h1>
        </div>
    )
}

export default Use_ref
