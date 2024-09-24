import React, { useCallback, useState } from 'react'
import Header from './Header'

function Use_callback() {
    const [count, setCount] = useState(0)

    const fun=useCallback(()=>{},[])
    return (
        <div>
            <Header fun={fun}/>
            <h1>Count {count}</h1>
            <button onClick={()=>{setCount(prev=>prev+1)}}>Click Here </button>
        </div>
    )
}

export default Use_callback
