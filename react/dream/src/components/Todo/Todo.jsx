import React from 'react'
import {FaTrashAlt} from 're'

export default function Todo({todo, onUpdate, onDelete}) {
    const {text, status} = todo;
    // const handleChange = (e) =>{
    //     const status
    // }

    return (
        <li key={item.id}>
            <input 
            type="checkbox" 
            id='checkbox' 
            checked={todo.status = 'completed'}
            onChange={handleChange}
            />
            <label htmlFor='checkbox'>{item.text}</label>
            <button type='button'><FaTrashAlt/></button>
        </li>
    )
    }
