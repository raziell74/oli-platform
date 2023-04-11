import { Palette, TypographyVariants } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

describe('Theme', () => {
  const checkPalette = (palette: Palette) => {
    expect(palette).toHaveProperty('mode');
    expect(palette).toHaveProperty('primary.main');
    expect(palette).toHaveProperty('secondary.main');
    expect(palette).toHaveProperty('background.paper');
    expect(palette).toHaveProperty('background.default');
    expect(palette).toHaveProperty('warning.main');
    expect(palette).toHaveProperty('text.primary');
  };

  const checkTypography = (typography: TypographyVariants) => {
    expect(typography).toHaveProperty('fontFamily');
  };

  describe('lightTheme', () => {
    test('has the correct palette and typography properties', () => {
      checkPalette(lightTheme.palette);
      checkTypography(lightTheme.typography);
    });
  });

  describe('darkTheme', () => {
    test('has the correct palette and typography properties', () => {
      checkPalette(darkTheme.palette);
      checkTypography(darkTheme.typography);
    });
  });
});
