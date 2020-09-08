import {useEffect} from 'react'
//Custom hook to update document title.
function useDocumentTitle(count) {
    useEffect(()=>{
        document.title=`Count is - ${count}`
    },[count])  
}

export default useDocumentTitle
