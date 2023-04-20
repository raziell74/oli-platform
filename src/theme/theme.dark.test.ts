import { Palette, TypographyVariants } from '@mui/material/styles';
import theme from './theme.dark';

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

  describe('theme.dark', () => {
    test('has the correct palette and typography properties', () => {
      checkPalette(theme.palette);
      checkTypography(theme.typography);
    });
  });
});
