import React from 'react';

import 'fontsource-roboto/400.css';
import 'fontsource-roboto/500.css';
import 'fontsource-roboto/700.css';
import 'fontsource-roboto-mono/400.css';

import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../src/theme';
import CssBaseline from '@mui/material/CssBaseline';

const MuiThemeWrapper = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MuiThemeWrapper;
