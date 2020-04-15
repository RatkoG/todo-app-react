import React from 'react';
import { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { TaskListContext } from '../context/TaskListContext';
import { SharedButton } from '../utils/global';

const StyledButton = styled(SharedButton)`
  background: #e37b40;
  color: white;
  font-size: 2rem;
  flex: 30%;
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
  const { addTask, edit, editTask } = useContext(TaskListContext);
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!edit) {
      addTask(title);
      setTitle(' ');
    } else {
      editTask(title, edit.id);
    }
  };
  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    if (edit) {
      setTitle(edit.title);
      console.log(edit);
    } else {
      setTitle('');
    }
  }, [edit]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add Task..."
        required
      />
      <StyledButton>{edit ? 'Edit Task' : 'Add Task'}</StyledButton>
    </StyledForm>
  );
};
