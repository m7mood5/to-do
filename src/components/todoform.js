import React, { useState} from 'react';
import shortid from 'shortid';
const todoform = (props) => {
    const[text, setText] = useState ("");
    const handelSubmit = (e)=>{
        e.preventDefault();
        props.onSubmit({
            id : shortid.generate(),
            text : text ,
            complete : false,
        });};
    return (
        <form>
            <input className='input-field' type='text' placeholder='Write What do U do ' onChange={(e)=> setText(e.target.value)} 
            value={text} />
            <button className='btn' onClick={handelSubmit}>Add To Do</button>
        </form>
    );};

export default todoform;