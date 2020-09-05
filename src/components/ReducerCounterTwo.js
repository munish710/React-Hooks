import React,{useReducer} from 'react'
//useReducer() the primitive useState()
const initialState={
    firstCounter:0,
    secondCounter:0
}
//Complex state and action.
//Can pass additional data to action
//Can maintain multiple states
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {...state,firstCounter: state.firstCounter+action.value}
        case 'decrement':
            return {...state,firstCounter: state.firstCounter-action.value}
        case 'reset':
            return initialState
        case 'increment2':
            return {...state,secondCounter: state.secondCounter+action.value}
        case 'decrement2':
            return {...state,secondCounter: state.secondCounter-action.value}
         default:
             return state

    }
}
function ReducerCounterTwo() {
    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
        <h2>First Count-{count.firstCounter}</h2>
        <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        <button onClick={()=>dispatch({type:'increment',value:5})}>Increment 5</button>
        <button onClick={()=>dispatch({type:'decrement',value:5})}>Decrement 5</button>
        <div>
        <h2>Second Count-{count.secondCounter}</h2>
        </div>
        <button onClick={()=>dispatch({type:'increment2',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement2',value:1})}>Decrement</button>
        </div>
    )
}

export default ReducerCounterTwo
