import { createStitches } from '@stitches/react';

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'white',

      //
      // white
      //
      white: 'hsl(0, 0%, 99%)',
      //
      // black
      //
      black500: 'hsl(207, 26%, 14%)',
      black600: 'hsl(207, 26%, 7%)',
      //
      // gray
      //
      gray400: 'hsl(206, 26%, 27%)',
      gray500: 'hsl(207, 26%, 27%)',
      //
      // yellow
      //
      yellow400: 'hsl(49, 79%, 53%)',
      yellow500: 'hsl(48, 70%, 48%)',
      //
      // red
      //
      red400: 'hsl(13, 98%, 52%)',
      red500: 'hsl(13, 88%, 48%)',
      //
      // green
      //
      green400: 'hsl(120, 25%, 54%)',
      green500: 'hsl(120, 32%, 44%)',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
    },
    fonts: {
      system: 'system-ui',
    },
  },
  utils: {
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
  },
});
