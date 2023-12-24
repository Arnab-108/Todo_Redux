import React, { useEffect } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getFail, getRequest, getSuccess } from '../Redux/action'
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
    const getData=()=>{
        dispatch(getRequest())
        axios.get("http://localhost:8080/todos").then((res)=>{
            dispatch(getSuccess(res.data))
            console.log(res)
        }).catch((err)=>{
            dispatch(getFail())
            console.log(err)
        })
    }

    useEffect(()=>{
        getData()
    },[])

    const handleAddTodo=(input)=>{
        const obj={
            title:input,
            status:false
        }
        dispatch(getRequest())
        axios.post("http://localhost:8080/todos",obj).then((res)=>{
            console.log(res)
            getData()
        }).catch(()=>{
            dispatch(getFail)
        })
    }

    if(isLoading){
        return(
            <h1>Loading...</h1>
        )
    }
    console.log(todos)
  return (
    <>
        <div>
            <TodosInput addTodo={handleAddTodo} />
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
