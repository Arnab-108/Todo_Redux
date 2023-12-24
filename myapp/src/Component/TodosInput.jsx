import React, { useState } from 'react'

export const TodosInput = ({addTodo}) => {
    const [todo,setTodo] = useState("")

    const handleAddTodo=()=>{
        console.log(todo)
        addTodo(todo)
        setTodo("")
    }
  return (
    <>
        <input type='text' placeholder='Add Todo' value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
        <button onClick={handleAddTodo}>Add</button>
    </>
  )
}
