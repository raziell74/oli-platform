import React, { ReactElement } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material/styles';
import lightTheme from '../../theme/theme.light';
import CssBaseline from '@mui/material/CssBaseline';

type MuiThemeWrapperPropMap = {
  children?: ReactElement | string | number;
};

const MuiThemeWrapper = ({ children }: MuiThemeWrapperPropMap) => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MuiThemeWrapper;
