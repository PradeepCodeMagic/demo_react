import React, { useState } from 'react'

export default function Password() {

    const [display,setDisplay]=useState(false)

    let change=()=>{
        setDisplay(!display)
    }
  return (
    <div>
      <input type={display==true ? "text" : "password" } />

      <button onClick={change} > {display==true ? "Hide" : "Show"}   </button>
    </div>
  )
}
