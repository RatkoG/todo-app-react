import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html {
      font-size: 62.5%; //1rem = 10px
      box-sizing: border-box;
      line-height: 1.15;

    }
		* {
      outline: none;
      box-sizing: inherit;

    }
		*,
    *::before,
    *::after {
      box-sizing: inherit;

    }
body{
  font-family: 'Montserrat', sans-serif;
	background:${(props) => props.theme.colors.background};
	min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
