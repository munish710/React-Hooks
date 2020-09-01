import React, { useState } from 'react'
import HookEffectTwo from './HookEffectTwo'

function MouseWrapper() {
    const[visible,setVisible]=useState(true)
    const showEvent=()=>{
        setVisible(!visible)
    }
    return (
        <div>
            <button onClick={showEvent}>Show Mouse Event</button>
             {visible && <HookEffectTwo/>}          
        </div>
    )
}

export default MouseWrapper
