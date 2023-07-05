import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { add } from '../Redux/todoSlice';
import { useNavigate } from 'react-router-dom';
import './AddTask.css'

export const AddTask = () => {

  const [todos,setTodo] = useState("")



  const  navigate = useNavigate()

  const dispatch = useDispatch() //uses to pass data to the store.

  const addTodo = () => {
    if (todos.length === 0) {
      return;
  }
    dispatch(add({ id: Date.now(), name: todos }));
      setTodo("");
      window.alert("List added successfully")
 
  }


  return (
    <div>
      <div className='heading'>TODO LIST</div>
    <div className='input'>
      <input type="text"
             placeholder='Tell me your plans'
             value={todos}
             onChange={(e) => setTodo(e.target.value)}
              />
              <button onClick={addTodo}>ADD</button>
             <button  onClick={() => navigate('/taskList')}>View List</button>
    </div>
    
    </div>
);
}

