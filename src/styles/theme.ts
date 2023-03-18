import { DefaultTheme } from 'styled-components';

const common = {
  black: '#000',
  white: '#FFF',
  alert: '#F2C72C',
  false: '#FF0000',
  success: '#008939'
};
export const defaultTheme: DefaultTheme = {
  borderRadius: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px'
  },
  palette: {
    common: {
      ...common
    },
    background: {
      main: '#2B2D42',
      contrastText: '#FFF'
    },
    backgroundSecondary: {
      main: '#2D3142',
      contrastText: '#FFF'
    },
    title: '#F1F1F5',
    text: '#F2F2F2',
    input: '#FFFFFF',
    placeholder: '#BFBFBF',
    primary: {
      main: '#BD93F9 ',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#B75D69',
      contrastText: '#FFF'
    }
  },
  paletteDark: {
    common: {
      ...common
    },
    background: {
      main: '#16192A',
      contrastText: '#F1F1F5'
    },
    backgroundSecondary: {
      main: '#222539',
      contrastText: '#F1F1F5'
    },
    backgroundAlternate: {
      main: '#2A2E47',
      contrastText: '#F1F1F5'
    },
    title: '#F1F1F5',
    text: '#F2F2F2',
    input: '#BEBEC3',
    placeholder: '#B0B0B0',
    primary: {
      main: '#FF7A00',
      contrastText: '#F1F1F5'
    },
    secondary: {
      main: '#6777EF',
      contrastText: '#F1F1F5'
    },
    primaryLight: {
      main: 'rgba(255, 122, 0,.25)',
      contrastText: '#F1F1F5'
    },
    tabBackground: {
      main: '#22253A',
      contrastText: '#F1F1F5'
    }
  },
  spacers: {
    xs: '.8rem',
    sm: '1.6rem',
    md: '2.4rem',
    lg: '3.2rem',
    xl: '4rem'
  },
  typography: {
    xs: '1.6rem',
    sm: '2.2rem',
    md: '2.8rem',
    lg: '3.4rem',
    xl: '3.8rem'
  },
  fonts: {
    main: 'Oswald',
    secondary: 'Open sans'
  },
  padding: { xs: '.8rem', sm: '1.6rem', md: '2.4rem', lg: '3.2rem' }
};
