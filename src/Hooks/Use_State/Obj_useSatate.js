import React, { useState } from 'react'

function Obj_useSatate() {
    const [name, setName] = useState({ FirstName: "", LastName: "" });
    return (
        <div>
            <form>
                <input type="text" value={name.FirstName} onChange={e => setName({ ...name, FirstName: e.target.value })}></input>
                <input type="text" value={name.LastName} onChange={e => setName({ ...name, LastName: e.target.value })}></input>

                <h3>First Name : {name.FirstName}</h3>
                <h3>Last Name : {name.LastName}</h3>
                <h3>Full Name : {`${name.FirstName} ${name.LastName}`}</h3>
            </form>

        </div>
    )
}

export default Obj_useSatate
