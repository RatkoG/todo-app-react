import React from 'react';
import { useContext, useState } from 'react';
import styled from 'styled-components';
import { TaskListContext } from '../context/TaskListContext';
import { SharedButton } from '../utils/global';

const StyledButton = styled(SharedButton)`
  background: #e37b40;
  color: white;
  font-size: 2rem;
  flex: 30%;
  /* padding: 1.3rem 2.3rem; */
`;

const StyledForm = styled.form`
  display: flex;
  margin-bottom: 5rem;

  & > .task-input {
    border: none;
    flex: 70%;
    font-size: 2rem;
  }
`;
export const TaskInput = () => {
  const { addTask } = useContext(TaskListContext);
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(title);
    setTitle(' ');
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit} className="form">
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add Task..."
        required
      />
      <StyledButton className="btn add-task">Add Task</StyledButton>
    </StyledForm>
  );
};
