/* eslint-disable import/prefer-default-export */
export const getDesignTokens = () => ({
  palette: {
    // palette values for light mode
    primary: {
      main: '#2a4870',
      light: 'rgb(84, 108, 140)',
      dark: 'rgb(29, 50, 78)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#886a47',
      light: 'rgb(140, 115, 84)',
      dark: 'rgb(78, 56, 29)',
      contrastText: '#fff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    background: {
      default: '#fff',
      paper: '#fbfbfb',
    },
  },
});
