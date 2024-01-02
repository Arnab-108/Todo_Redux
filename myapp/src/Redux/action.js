import { GET_TODO_FAIL, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"
import axios from "axios"

const getRequest=()=>{
    return {type: GET_TODO_REQUEST}
}
const getSuccess=(payload)=>{
    return {type: GET_TODO_SUCCESS,payload}
}
const getFail=()=>{
    return {type: GET_TODO_FAIL}
}

export const getTodos=(dispatch)=>{
    dispatch(getRequest())
    axios.get("http://localhost:8080/todos").then((res)=>{
        dispatch(getSuccess(res.data))
        console.log(res)
    }).catch((err)=>{
        dispatch(getFail())
        console.log(err)
    })
}

export const addTodo=(input)=>(dispatch)=>{
    const obj={
        title:input,
        status:false
    }
    //dispatch(getRequest())
    axios.post("http://localhost:8080/todos",obj).then((res)=>{
        console.log(res)
        dispatch(getTodos)
    }).catch(()=>{
        dispatch(getFail)
    })
}