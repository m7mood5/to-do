import React from 'react'

const todo = (props) => {
  return (
    <div className='d-f'>
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div>{props.todo.text}</div>
    <button className='delete-btn' onClick={props.onDelete}><span className='material-symbols-sharp'>delete</span></button>
    </div>
  )
}

export default todo;