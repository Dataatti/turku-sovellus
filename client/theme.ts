import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Arial',
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 20,
    },
    h3: {
      fontSize: 18,
    },
    body1: {
      fontSize: 16,
    },
  },
  palette: {
    primary: {
      main: '#0062ae',
    },
    secondary: {
      main: '#ce4b16',
    },
  },
});

export default theme;
