import React from 'react'

function Header() {
    console.log("Header Renderd !");
    
  return (
    <div>
            <h1> Header </h1>
    </div>
  )
}

export default React.memo(Header)
