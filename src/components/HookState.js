import React, { useState } from 'react'

function HookState() {
    const [name,setName]=useState({firstName:'',lastName:''})
    //Need to spread state before mutating it because hooks don't automatically merge and update it like class Components.
    return (
        <div>
           <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}></input> 
           <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}></input> 
           <h1>Firstname: {name.firstName}</h1>
           <h1>Lastname: {name.lastName}</h1>
           <h1>{JSON.stringify(name)}</h1>
        </div>
    )
}

export default HookState
