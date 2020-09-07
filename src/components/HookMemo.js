import React,{useState,useMemo} from 'react'
function HookMemo(){
    const[counterOne,setCounterOne]=useState(0)
    const[counterTwo,setCounterTwo]=useState(0)
    const incrementOne=()=>{
        setCounterOne(counterOne+1)
    }

    const incrementTwo=()=>{
        setCounterTwo(counterTwo+1)
    }
    //useMemo calls a function instances stores its value and caches it until a dependency is changed.
    const isEven=useMemo(()=>{
        let i=0
        while(i<2000000000)i++
        if(counterOne%2==0)
            return true
        else
            return false
    },[counterOne])
return(
    <div>
       <button onClick={incrementOne}>Count {counterOne}</button>
       {/*isEven is not a FUnction call because now it stores a value. */}
       <span >{isEven?"Even":"Odd"}</span>
       <button onClick={incrementTwo}>Count {counterTwo}</button>
    </div>
)
}

export default HookMemo