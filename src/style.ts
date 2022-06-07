import { createGlobalStyle } from 'styled-components';
import { ThemeType } from 'themes';

export default createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
    background-color: ${({ theme }) => theme.colors.veryDarkBlue};
  }
`;
