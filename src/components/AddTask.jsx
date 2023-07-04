import React from 'react'
import './AddTask.css'

export const AddTask = () => {
  return (
    <div><div className='heading'>TODO LIST</div>
    <div className='input'>
      <input type="text"
             placeholder='Tell me your plans'
              />
              <button>ADD</button>
    </div>
    
    </div>
);
}

