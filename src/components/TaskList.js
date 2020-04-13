import React, { useContext } from 'react';
import Header from './Header';
import { TaskInput } from './TaskInput';
import { TaskListContext } from '../context/TaskListContext';
import styled from 'styled-components';
import Task from './Task';

const StyledTaskList = styled.div`
  padding: 3rem;
  background: white;
  width: 50rem;
`;

const StyledUl = styled.ul`
  padding: 0;
`;

export const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <StyledTaskList>
      <Header />
      <TaskInput />
      <StyledUl className="list">
        {tasks.map((task) => {
          return <Task task={task} key={task.id} />;
        })}
      </StyledUl>
    </StyledTaskList>
  );
};
