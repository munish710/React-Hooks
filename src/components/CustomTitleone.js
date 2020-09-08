import React, { useState, useEffect } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function CustomTitleone() {
    const[count,setCount]=useState(0)
    useDocumentTitle(count)
    return (
        <div>
           <button onClick={()=>setCount(count+1)}>Update title</button> 
        </div>
    )
}

export default CustomTitleone
