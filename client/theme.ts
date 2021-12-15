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
      main: '#006BB6',
    },
    secondary: {
      main: '#F26522',
    },
  },
});

export default theme;
