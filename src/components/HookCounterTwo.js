import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount=0
    const [count,setCount]=useState(initialCount)
    const incrementFive=()=>{
        for(let i=0; i<5;i++){
            //THis dosen't increment by five.
            //setCount(count+1)
            setCount(prevCount=>prevCount+1)
        }
    }
    return (
        <div>
        <h1>Count : {count}</h1>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={incrementFive}>Increment</button>
        </div>
    )
}

export default HookCounterTwo
