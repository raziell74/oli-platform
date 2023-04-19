import React from 'react';
import { styled } from '@mui/material/styles';

const Main = styled('main')(({ theme }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100%',
}));

type LoginHeroMap = {
  /**
   * @description url for the hero image asset
   */
  image: string | undefined;

  /**
   * @description Gradient style override
   * @default linear-gradient(to left, #f5f6fc85, #ff600066)
   */
  gradient?: string | boolean;
};

const LoginHero = ({ image, gradient }: LoginHeroMap) => {
  if (!image) return <></>;

  let gradientOverlay: string = 'linear-gradient(to left, #ffffff00, #ffffff00)';
  if (gradient !== false) {
    gradientOverlay = gradient ? `${gradient}` : 'linear-gradient(to left, #f5f6fc85, #ff600066)';
  }

  return (
    <Main data-testid="login-hero" sx={{ backgroundImage: `${gradientOverlay},url('${image}')` }} />
  );
};

export default LoginHero;
