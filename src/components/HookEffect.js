import React, { useState, useEffect } from 'react'
//Conditional Rendering of useEffect
function HookEffect() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log('Use Effect called, but not needed.')
        document.title=`You clicked ${count} times`
    },[count])
    return (
        <div>
        <input type="text" onChange={(e)=>setName(e.target.value)}></input>
        <button onClick={()=>setCount(count+1)}>Increment title</button>
            
        </div>
    )
}

export default HookEffect
