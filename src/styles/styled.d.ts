import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    padding: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };
    palette: {
      common: {
        black: string;
        white: string;
        success: string;
        false: string;
        alert: string;
      };
      primary: IPalette;
      secondary: IPalette;
      background: IPalette;
      backgroundSecondary: IPalette;
      title: string;
      text: string;
      input: string;
      placeholder: string;
    };
    paletteDark: {
      common: {
        black: string;
        white: string;
        success: string;
        false: string;
        alert: string;
      };
      primary: IPalette;
      secondary: IPalette;
      primaryLight: IPalette;
      background: IPalette;
      backgroundSecondary: IPalette;
      backgroundAlternate: IPalette;
      tabBackground: IPalette;
      title: string;
      text: string;
      input: string;
      placeholder: string;
    };
    spacers: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    typography: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fonts: {
      main: string;
      secondary: string;
    };
  }
}
