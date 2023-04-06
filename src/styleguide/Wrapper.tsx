import React, { FunctionComponent, ReactElement } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from '../theme';
import CssBaseline from '@mui/material/CssBaseline';

type MuiThemeWrapperWithChildren = {
  children?: ReactElement | string | number;
};

const MuiThemeWrapper: FunctionComponent<MuiThemeWrapperWithChildren> = ({ children }) => (
  <ThemeProvider theme={lightTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default MuiThemeWrapper;
