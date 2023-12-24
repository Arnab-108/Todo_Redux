import { GET_TODO_FAIL, GET_TODO_REQUEST, GET_TODO_SUCCESS } from "./actionType"


export const getRequest=()=>{
    return {type: GET_TODO_REQUEST}
}
export const getSuccess=(payload)=>{
    return {type: GET_TODO_SUCCESS,payload}
}
export const getFail=()=>{
    return {type: GET_TODO_FAIL}
}
