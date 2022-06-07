export const theme = {
  fontFamily: "'Overpass', sans-serif",
  gradient: 'linear-gradient(#232A34, #181E27)',
  colors: {
    darkBlue: '#262E38',
    lightGrey: '#969FAD',
    mediumGrey: '#7C8798',
    orange: '#FC7614',
    pureWhite: '#FFFFFF',
    veryDarkBlue: '#131518',
  },
  fontSizes: {
    large: '28px',
    medium: '16px',
    small: '15px',
  },
  fontWeights: {
    bold: 700,
    regular: 400,
  },
  lineHeights: {
    normal: '24px',
  },
};

export type ThemeType = typeof theme;
