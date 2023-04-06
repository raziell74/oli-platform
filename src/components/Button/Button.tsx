import React, { FunctionComponent } from 'react';
import { Button as MUIButton, ButtonProps } from '@mui/material';

const Button: FunctionComponent<ButtonProps> = ({ children, ...props }) => {
  return <MUIButton {...props}>{children}</MUIButton>;
};

export default Button;
