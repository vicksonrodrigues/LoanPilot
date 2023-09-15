import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import SiteRouter from './components/SiteRouter';
import { getDesignTokens } from './theme';

const App = () => {
  let theme = createTheme(getDesignTokens());
  theme = responsiveFontSizes(theme);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SiteRouter />
      </ThemeProvider>
    </div>
  );
};

export default App;
