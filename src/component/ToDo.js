import React from 'react'
import './ToDo.css'
import { useState } from 'react'


function ToDo() {
    const [inputValue,setInputValue] = useState('');
    const [toDoList,setToDoList] = useState([]);

    const addToDo = ()=>{
        setToDoList([...toDoList,inputValue]);
    }

    const handleInputChange = (event)=>{
        setInputValue(event.target.value);
    }
  return (
    <div className='main'>
        <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
        />
        <button onClick={addToDo}>Add</button>
        <ul>
           {toDoList.map((value,index)=>(
            <li key={index}>{value}</li>
           ))}
        </ul>
    </div>
  )
}

export default ToDo