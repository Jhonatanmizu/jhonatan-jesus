// Components
import Main from './components/Main';
import Skills from './components/Skills';
// Theme
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Main />
        <Skills />
        <Footer />
      </ThemeProvider>
    </>
  );
};
export default App;
