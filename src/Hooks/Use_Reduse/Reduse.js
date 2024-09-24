import React, { useReducer, useState } from 'react'

function Reduse() {

    const initialstate = { count: 0 }
    const reducer = (state, action) => {

        switch (action.type) {
            case 'decrease': {
                return { count: state.count - 1 }
            }
            case 'increase': {
                return { count: state.count +1 }
            }
            case 'input': {
                return { count: action.payload }
            }
            default: {
                return state

            }
        }


    }

    const [state, dispatch] = useReducer(reducer, initialstate)

    return (


        <div>
            <h1>{state.count}</h1>
            <button onClick={() => { dispatch({ type: 'decrease' }) }}>Decrease</button>
            <button onClick={() => { dispatch({ type: 'increase' }) }}>Increase</button>
<br/>
<input value={state.count} onChange={(e)=>dispatch({type: 'input',payload:Number(e.target.value) })} type="number" />
        </div>
    )
}

export default Reduse
