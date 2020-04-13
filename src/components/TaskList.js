import React, { useContext } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { TaskInput } from './TaskInput';
import { TaskListContext } from '../context/TaskListContext';
import Task from './Task';
import { SharedButton } from '../utils/global';

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
const StyledButton = styled(SharedButton)`
  display: block;
  background: ${(props) => props.theme.colors.delete};
  color: white;
  margin: auto;
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
`;
export const TaskList = () => {
  const { tasks, clearList } = useContext(TaskListContext);
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

      {tasks.length ? (
        <StyledButton onClick={clearList}>Clear List</StyledButton>
      ) : null}
    </StyledTaskList>
  );
};
