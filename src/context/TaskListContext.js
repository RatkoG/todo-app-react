import React, { createContext, useState, useEffect } from 'react';
import uuid from 'react-uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialState);

  const [edit, setEdit] = useState(null);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid(), completed: false }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);
    setEdit(item);
  };

  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    );
    setTasks(newTasks);
    setEdit(null);
  };

  function toggleComplete(id) {
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
  }

  const clearList = () => setTasks([]);

  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        findItem,
        editTask,
        edit,
        clearList,
        toggleComplete,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
