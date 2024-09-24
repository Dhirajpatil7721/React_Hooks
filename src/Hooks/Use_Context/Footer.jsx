import React, { useContext } from 'react'
import { App_Context } from './App_Context'

function Footer() {
    const { phone } = useContext(App_Context);
    return (
        <div>
            <h1>Footer</h1>
            <h4>Phone : {phone} </h4>
        </div>
    )
}

export default Footer
