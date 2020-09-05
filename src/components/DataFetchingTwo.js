import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialState={
    loading:true,
    error:'',
    post:{}
    
}
//State comes before action. asted half an hour for this bug
const reducer=(state,action)=>{
    
    switch(action.type){
        case 'FETCH_SUCCESS' :
            return {
                loading:false,
                error:'',
                post:action.payload
                 
            }
        case 'FETCH_FAIL' :
            return {
                loading:false,
                error:'Failed to load the post :(',
                post:{}
            }
        default:
            return state
    }
}
function DataFetchingTwo() {
    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(res=>{
            console.log(res.data)
            dispatch({type:'FETCH_SUCCESS', payload:res.data})
        })
        .catch(err=>{
            console.log(err)
            dispatch({type:'FETCH_FAIL'})
        })
    },[])

    return (
        <div>
            {state.loading?"LOADING":state.post.title}
            {state.error?state.error : null}
        </div>
    )
}

export default DataFetchingTwo
