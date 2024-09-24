import React, { useContext } from 'react'
import { App_Context } from './App_Context'
function Contact() {
    // const phone=useContext(App_Context)
    const {phone, name}=useContext(App_Context)
    return (
        <div>
            <h2>Conntact</h2>
            <h4>Phone :{phone} </h4>
            <h4>Name :{name} </h4>
        </div>
    )
}

export default Contact
