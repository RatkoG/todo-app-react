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
const StyledH2 = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.colors.edit};
`;
export const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <StyledTaskList>
      <Header />
      <TaskInput />
      {tasks.length ? (
        <StyledUl className="list">
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </StyledUl>
      ) : (
        <StyledH2>No Tasks</StyledH2>
      )}
    </StyledTaskList>
  );
};
