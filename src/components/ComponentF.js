import React,{useContext} from 'react'
import {UserContext,SuperheroContext,CountContext} from '../App'
//useContext() makes life so easy , otherwise i would have to nest Consumer components and return jsx from functions.
function ComponentF() {
    const user=useContext(UserContext)
    const supeName=useContext(SuperheroContext)
    const {countValue,countDispatch}=useContext(CountContext)
    return (
        <div>
            {user}-{supeName}
            <div>
            <h2>Count-{countValue}</h2>
            <button onClick={()=>countDispatch('increment')}>Increment</button>
            <button onClick={()=>countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countDispatch('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default ComponentF
