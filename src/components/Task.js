import React, { useContext } from 'react';
import { TaskListContext } from '../contexts/tasklistContext';

const Task = ({ task }) => {
  const { deleteTask, findItem, completeToggler } = useContext(TaskListContext);

  return (
    <li className='list-item'>
      <span className={`${task.completed ? 'completed' : ''}`}>
        {task.title}{' '}
      </span>
      <div>
        <button
          onClick={() => deleteTask(task.id)}
          className='btn-delete task-btn'>
          <i className='fas fa-trash-alt'></i>
        </button>{' '}
        <button
          onClick={() => completeToggler(task.id)}
          className='btn-complete task-btn'>
          <i className='far fa-check-circle'></i>
        </button>
        <button onClick={() => findItem(task.id)} className='btn-edit task-btn'>
          <i className='fas fa-pen'></i>
        </button>
      </div>
    </li>
  );
};

export default Task;
