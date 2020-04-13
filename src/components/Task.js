import React from 'react';
import styled from 'styled-components';
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
const StyledIcon = styled.i`
  color: ${(props) =>
    props.primary ? props.theme.colors.delete : props.theme.colors.edit};
  font-size: 2rem;
`;

const Task = ({ task }) => {
  return (
    <StyledLi className="list-item">
      <span>{task.title}</span>
      <div>
        <StyledButton className="btn-delete task-btn">
          <StyledIcon primary className="fas fa-trash-alt"></StyledIcon>
        </StyledButton>
        <StyledButton className="btn-edit task-btn">
          <StyledIcon className="fas fa-pen"></StyledIcon>
        </StyledButton>
      </div>
    </StyledLi>
  );
};

export default Task;
