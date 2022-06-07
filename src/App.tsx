import { ThemeProvider } from 'styled-components';
import { Home } from 'views';
import Style from './style';
import { theme } from 'themes';

export const App = () => (
  <ThemeProvider theme={theme}>
    <Style />
    <Home />
  </ThemeProvider>
);
