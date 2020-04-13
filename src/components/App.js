import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import { TaskList } from './TaskList';

import TaskListContextProvider from '../context/TaskListContext';
import GlobalStyles from '../utils/global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TaskListContextProvider>
        <GlobalStyles />
        <TaskList />
      </TaskListContextProvider>
    </ThemeProvider>
  );
};

export default App;
