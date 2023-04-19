import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderWidth: 2,
  borderStyle: 'solid',
  borderColor: alpha(theme.palette.text.primary, 0.15),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  transition: theme.transitions.create(['background-color', 'border-color']),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    borderColor: alpha(theme.palette.text.primary, 0.42),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
