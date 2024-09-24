import React, { useState } from 'react'

function Array_useState() {

    const [item, setItem] = useState([]);

    const add = () => {
        setItem([...item, {
            id: item.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    const reset=()=>{
        setItem((item)=>[])
    }
    return (
        <div>
            <button onClick={add}>Add a Number</button>
                <button onClick={reset}>Reset</button>

            <ul>
                {
                    item.map(item => <li key="item.id">{item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default Array_useState
