// import React from 'react'

// function App_context() {
//     return (
//         <div>

//         </div>
//     )
// }    

// export default App_context

import { createContext } from "react";

export const App_Context = createContext();

const ContextProvider = (props) => {
    const phone = "+1 1234567890"
    const name="Dhiraj"
    return (
        <App_Context.Provider value={{phone,name}}>
            {props.children}
        </App_Context.Provider>
    )
}
export default ContextProvider