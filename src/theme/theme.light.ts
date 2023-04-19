import { createTheme } from '@mui/material/styles';
import muiComponentStyles from './mui.styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff6000',
    },
    secondary: {
      main: '#1976d2',
    },
    background: {
      paper: '#ffffff',
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

theme.components = muiComponentStyles(theme);

export default theme;
