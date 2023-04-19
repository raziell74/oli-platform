import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = (props: any) => (
  <Typography
    data-testid="copyright"
    variant="body2"
    color="text.secondary"
    align="center"
    {...props}
  >
    {'Copyright'}
    <sup>{'© '}</sup>
    <Link color="inherit" href="#">
      OLI - Online Inspections
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

export default Copyright;
