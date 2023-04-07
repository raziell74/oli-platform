import React from 'react';
import { Button as MUIButton, ButtonProps } from '@mui/material';

/**
 * OLI Styled MUI Button
 *
 * @author Jordan Richmeier
 * @returns ReactNode
 */
const Button = ({ children, ...props }: ButtonProps) => {
  return <MUIButton {...props}>{children}</MUIButton>;
};

export default Button;
