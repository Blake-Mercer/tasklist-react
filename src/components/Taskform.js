import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../contexts/tasklistContext';

const Taskform = () => {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type='text'
        placeholder='Add Task...'
        value={title}
        required
        onChange={handleChange}
        className='task-input'
      />
      <div className='buttons'>
        <button className='btn add-task-btn' type='submit'>
          Add Task
        </button>
        <button onClick={clearList} className='btn clear-btn'>
          Clear Tasks
        </button>
      </div>
    </form>
  );
};

export default Taskform;
