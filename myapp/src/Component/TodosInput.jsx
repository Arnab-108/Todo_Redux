import React, { useState } from 'react'
import { addTodo } from '../Redux/action'
import { useDispatch } from 'react-redux'

export const TodosInput = () => {
    const [todo,setTodo] = useState("")
    const dispatch = useDispatch()
    const handleAddTodo=()=>{
        console.log(todo)
        dispatch(addTodo(todo))
        setTodo("")
    }
  return (
    <>
        <input type='text' placeholder='Add Todo' value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
        <button onClick={handleAddTodo}>Add</button>
    </>
  )
}
