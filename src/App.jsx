import React from 'react';
import { AddTask } from './components/AddTask';
import { TaskList } from './components/TaskList';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
  <BrowserRouter>
  
   <Routes>
          <Route path='/' element={<AddTask />} />
          <Route path='/taskList' element={<TaskList />} />
        </Routes>
  
 </BrowserRouter>
  
  );
}

export default App;
