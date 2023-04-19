import { createTheme } from '@mui/material/styles';
import muiComponentStyles from './mui.styles';

const theme = createTheme({
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

theme.components = muiComponentStyles(theme);

export default theme;
