import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  font-size: 3rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.blue};
  border-bottom: 2px solid ${(props) => props.theme.colors.orange};
  text-align: center;
  margin-top: 0;
  margin-bottom: 3rem;
`;

const Header = () => {
  return (
    <div className="header	">
      <StyledHeader>Task Manager</StyledHeader>
    </div>
  );
};

export default Header;
