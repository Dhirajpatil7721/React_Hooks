import React, { useRef } from 'react'

function Useref_txt() {
    const inputElem = useRef(); 
    const click=()=>{
        // console.log(inputElem.current);
        
        inputElem.current.style.background="orange"
    }
    const clickre=()=>{
        inputElem.current.style.background="white"
        
    }
    return (
        <div>
                <input type="text" ref={inputElem} />
                <button onClick={click}>Click Me</button>
                <button onClick={clickre}>Click to Reset</button>
        </div>
    )
}

export default Useref_txt
