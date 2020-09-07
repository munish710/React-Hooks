import React, { useState,useEffect, useRef } from 'react'

function RefTimer() {
    const [count,setCount]=useState(0)
    //useRef to store mutable Value.
    const intervalRef=useRef()
    useEffect(() => {
        
         intervalRef.current=setInterval(()=>{
            setCount(prevCount=>prevCount+1)
        },1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])
    return (
        <div>
           Count-{count} 
           <button  onClick={()=>clearInterval(intervalRef.current)}> Stop.</button>
        </div>
    )
}

export default RefTimer
