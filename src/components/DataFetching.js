import React,{useState,useEffect} from 'react'
import axios from 'axios'
//Fetching a post from dummy API
function DataFetching() {
    const[post,setPost]=useState({})
    const[id,setId]=useState(1)
    const[idFromButton,setIdButton]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
        .then(res=>{
            setPost(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[idFromButton])

    const clickHandler=()=>{
        setIdButton(id)
    }
    return (
        <div>
           <input type="text" value={id} onChange={e=>setId(e.target.value)}></input>
           <button type="button" onClick={clickHandler}>Get Post</button> 
           {post.title}
        </div>
    )
}

export default DataFetching
