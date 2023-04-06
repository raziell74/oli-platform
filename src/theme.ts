import { createTheme } from '@mui/material/styles';

export const light_theme = createTheme({
  palette: {
    mode: 'light', // Set the theme mode to 'light'
    primary: {
      main: '#FFA500', // Orange
      contrastText: '#FFFFFF', // White
    },
    secondary: {
      main: '#0D47A1', // Deep Blue
      contrastText: '#FFFFFF', // White
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#FFC107', // Light Orange
    },
    info: {
      main: '#29b6f6',
    },
    success: {
      main: '#66bb6a',
    },
    background: {
      default: '#F5F5F5', // Light Gray as default background
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Professional-looking fonts
  },
});

export const dark_theme = createTheme({
  palette: {
    mode: 'dark', // Set the theme mode to 'dark'
    primary: {
      main: '#FFA500', // Orange
      contrastText: '#FFFFFF', // White
    },
    secondary: {
      main: '#0D47A1', // Deep Blue
      contrastText: '#FFFFFF', // White
    },
    warning: {
      main: '#FFC107', // Light Orange
    },
    background: {
      default: '#303030', // Dark Gray as default background
      paper: '#424242', // Dark Gray for paper-like surfaces
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Professional-looking fonts
  },
});

export default light_theme;
