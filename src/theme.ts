import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff6000',
    },
    secondary: {
      main: '#1976d2',
    },
    background: {
      paper: '#e2e2e2',
      default: '#d2d2d2',
    },
    warning: {
      main: '#edbf02',
    },
    text: {
      primary: 'rgba(72,72,72,0.87)',
      disabled: 'rgba(154,154,154,0.38)',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Professional-looking fonts
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff701d',
    },
    secondary: {
      main: '#64b5f6',
    },
    background: {
      paper: 'rgba(35,35,35,0.8)',
      default: '#454545',
    },
    warning: {
      main: '#ede202',
    },
    text: {
      primary: '#d0d0d0',
    },
    error: {
      main: '#ef5350',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Professional-looking fonts
  },
});

export default lightTheme;
