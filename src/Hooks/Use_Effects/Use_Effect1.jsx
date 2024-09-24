import React, { useEffect, useState } from 'react'

function Use_Effect1() {

    const [count , setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count=>count+1)
        },1000)
    })
    
    const start=()=>{
        
    }
    const stop=()=>{

    }
    return (
        <div>
            <h2>I've render {count} times !</h2>
            <button onClick={start}>Strart</button>
            <button onClick={stop}>Stop</button>
        </div>
    )
}

export default Use_Effect1