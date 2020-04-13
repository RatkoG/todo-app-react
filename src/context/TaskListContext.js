import React, { createContext, useState } from 'react';
import uuid from 'react-uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
  const [tasks, setTasks] = useState([
    { title: 'Read the book', id: 1 },
    { title: 'Clean', id: 2 },
    { title: 'Test your skills', id: 3 },
    { title: 'Github Review', id: 4 },
  ]);

  const [edit, setEdit] = useState(null);

  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
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

  return (
    <TaskListContext.Provider
      value={{ tasks, addTask, removeTask, findItem, editTask, edit }}
    >
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
