import {extendTheme} from 'native-base';

export const customTheme = extendTheme({
  colors: {
    primary: {
      50: '#18181b',
      100: '#27272a',
      200: '#3f3f46',
      300: '#52525b',
      400: '#71717a',
      500: '#a1a1aa',
      600: '#d4d4d8',
      700: '#e4e4e7',
      800: '#f4f4f5',
      900: '#fafafa',
    },
    amber: {
      400: '#d97706',
    },
  },
  config: {
    initialColorMode: 'dark',
  },
});
