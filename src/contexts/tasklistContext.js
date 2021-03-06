import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  // State
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const [editItem, setEditItem] = useState(null);

  // Functions
  const addTask = (title) => {
    setTasks([...tasks, { title, completed: false, id: uuid() }]);
    console.log(tasks);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearList = () => {
    setTasks([]);
  };

  const completeToggler = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        clearList,
        findItem,
        editTask,
        editItem,
        completeToggler,
      }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
