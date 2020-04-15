import React, { useContext } from 'react';
import styled from 'styled-components';
import { TaskListContext } from '../context/TaskListContext';
import { SharedButton } from '../utils/global';
const StyledLi = styled.li`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.text};
  list-style: none;
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    padding-bottom: 2rem;
  }
`;
const StyledButton = styled(SharedButton)`
  opacity: 0;
  &:not(:last-child) {
    margin-right: 1rem;
  }
  ${StyledLi}:hover & {
    opacity: 1;
  }
`;
const StyledSpan = styled.span`
  cursor: pointer;
`;

const StyledIcon = styled.i`
  color: ${(props) =>
    props.primary ? props.theme.colors.delete : props.theme.colors.edit};
  font-size: 2rem;
`;

const Task = ({ task }) => {
  const { removeTask, findItem, toggleComplete } = useContext(TaskListContext);
  return (
    <StyledLi>
      <StyledSpan
        onClick={() => toggleComplete(task.id)}
        style={{
          textDecoration: task.completed ? 'line-through' : null,
        }}
      >
        {task.title}
      </StyledSpan>
      <div>
        <StyledButton onClick={() => removeTask(task.id)}>
          <StyledIcon primary className="fas fa-trash-alt"></StyledIcon>
        </StyledButton>
        <StyledButton onClick={() => findItem(task.id)}>
          <StyledIcon className="fas fa-pen"></StyledIcon>
        </StyledButton>
      </div>
    </StyledLi>
  );
};

export default Task;
