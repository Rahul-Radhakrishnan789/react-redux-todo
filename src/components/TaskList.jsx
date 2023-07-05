import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { remove,update } from '../Redux/todoSlice';



export const TaskList = () => {


  const {data} = useSelector((state) => state.todo)

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this task");
    if (confirmDelete) {
        dispatch(remove({ id: id }));
    } 
}


const handleEdit = (id) => {
  const editValue = data.find((e) => e.id === id);
  if (editValue) {
    const newName = prompt('Enter the new task name', editValue.name);
    if (newName) {
      dispatch(update({ id: editValue.id, name: newName }));
    }
  }
};

  return (
    <div>
      <h2>TODO LIST </h2>
      <div> {data.map((e) => {
          return (
            <div className="todo">
              <div className="left">
                <p>{e.name}</p>
              </div>
              <div className="right">

                 
               <button   onClick={() => handleDelete(e.id)}>DELETE</button>
              
               <button onClick={() => handleEdit(e.id)}>EDIT</button>


            
              </div>
            </div>
          );
        })}
        </div>
      </div>
  )
}
