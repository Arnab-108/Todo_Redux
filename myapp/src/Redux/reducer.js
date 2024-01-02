import { GET_TODO_FAIL, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"
const initState={
    todos:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_TODO_REQUEST:
            return {...state,isLoading:true}
        case GET_TODO_SUCCESS:
            return {...state, isLoading:false , todos:payload}
        case GET_TODO_FAIL:
            return {...state , isLoading:false,isError:true}
        default:
            return state
    }
}