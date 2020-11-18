import './App.css';
import React from 'react';
import Tasklist from './components/Tasklist';
import Taskform from './components/Taskform';
import TaskListContextProvider from './contexts/tasklistContext';
import Header from './components/Header';

function App() {
  return (
    <TaskListContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <Header />
          <div className='main'>
            <Taskform />
            <Tasklist />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
