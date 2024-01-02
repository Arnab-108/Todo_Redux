import React, { useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import {getTodos} from "../Redux/action"
import { TodosInput } from './TodosInput'
export const Todos = () => {
    const dispatch = useDispatch()
    const {todos,isLoading} = useSelector((state)=>{
        console.log(state)
        return{
            todos:state.todos,
            isLoading:state.isLoading
        }
    })
    

    useEffect(()=>{
        dispatch(getTodos)
    },[])

    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }
    console.log(todos)
  return (
    <>
        <div>
            <TodosInput />
            <h1>Todo List</h1>
            {
                todos?.map((res)=>(
                    <div key={res.id}>
                        <p>{res.title}---{res.status ? "Completed":"Pending"}</p>
                    </div>
                ))
            }
        </div>
    </>
  )
}
