import React, { useState, useEffect } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function CustomTitleTwo() {
    const[count,setCount]=useState(0)
    useDocumentTitle(count)
    return (
        <div>
           <button onClick={()=>setCount(count+1)}>Update title</button> 
        </div>
    )
}

export default CustomTitleTwo
