import React, { useState } from 'react';
import TodoForm from'../components/todoform';
import Todo from '../components/todo';
import"./App.css";

const App = () => {
  let[todos,setTodos]=useState([])
    const addTodo = (todo)=>{
      setTodos([todo,...todos]);
    }
  const handelDelete = (idClick) =>{
    setTodos(todos.filter((todo)=>todo.id !== idClick))
  }
  return (
    <div className='container'>
      <TodoForm onSubmit={addTodo}/>
      {
        todos.map((todo)=>(
        <Todo key={todo.id} todo={todo}
        onDelete ={()=>handelDelete(todo.id)}
        />
        ))}
    </div>
  )
}

export default App