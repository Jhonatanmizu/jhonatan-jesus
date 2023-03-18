// Components
import Main from './components/Main';
// Theme
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </>
  );
};
export default App;
