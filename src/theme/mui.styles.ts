import { alpha, Theme } from '@mui/material/styles';

/** Component overrides */
const muiComponentStyles = (theme: Theme) => {
  return (theme.components = {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: `linear-gradient(120deg, ${alpha(
            theme.palette.primary.light,
            0.25
          )} 0%, ${theme.palette.background.paper} 25%, ${
            theme.palette.background.paper
          } 60%, ${alpha(theme.palette.primary.light, 0.2)} 100%)`,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.paper} 100%)`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          transition: theme.transitions.create(['background-color', 'border-color']),
          borderWidth: 2,
        },
      },
    },
  });
};

export default muiComponentStyles;
