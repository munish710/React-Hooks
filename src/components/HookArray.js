import React, { useState } from 'react'

function HookArray() {
    //Array of Objects
    const [items,setItems]=useState([])

    const addValue=()=>{
        setItems([
            ...items,{
                id:items.length,
                value:Math.floor(Math.random()*10)+1
            }
        ])
    }
    return (
        <div>
        <button onClick={addValue}>Add Object</button>
        <ul>
        {
            items.map(item=>{
                return<li key={item.id}>{item.value}</li>
            })
        }
        </ul>
            
        </div>
    )
}

export default HookArray
