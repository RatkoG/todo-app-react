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
  const addTask = (title) => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  return (
    <TaskListContext.Provider value={{ tasks, addTask }}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
