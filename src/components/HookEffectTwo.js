import React, { useState, useEffect } from 'react'
//useEffect only once, like componentDidMount()
//Empty array signifies value isn't dependent on any  prop or state.
//Recreating ComponentDidunmount() the return function acts as cleanup code. it can be removing timer,subscriptions,events.
function HookEffectTwo() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logMouse=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("Use Effect Called!")
        window.addEventListener("mouseover",logMouse)

        return ()=>{
            console.log("Component Unmounted!")
            window.removeEventListener("mouseover",logMouse)
        }
    },[])
    return (
        <div>
          X- {x} Y- {y}  
        </div>
    )
}

export default HookEffectTwo
