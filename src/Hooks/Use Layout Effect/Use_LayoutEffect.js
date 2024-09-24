import React, { useEffect, useLayoutEffect } from 'react'

function Use_LayoutEffect() {
    useEffect ( () => {
        console.log("use Effect");

    },[])
    useLayoutEffect ( () => {
        console.log("use Layout Effect");
    },[])
    return (
        <div>
            {/* <h1>Hello</h1> */}
            {Array(100).fill('').map((item,index)=>(<li key={index}>{Math.pow(Math.random(),10)}</li>))}
        </div>
    )
}

export default Use_LayoutEffect
