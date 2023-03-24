import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
// Create a theme instance.
const theme = createTheme({
palette: {
   primary: {
      main: '#462B34',
   },
   secondary: {
     main: '#19857b',
   },
   error: {
   main: red.A400,
   },
  },
  typography: {
    fontFamily:" Whyte Inktrap" ,
  },
  components: {
    // Name of the component
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Whyte Inktrap';
        src: url('../../public/fonts/whyte/WhyteInktrap-Medium.woff');
        font-display: swap;
        ascent-override: 100%;
        descent-override: 20%;
        line-gap-override: normal;
        advance-override: 10;
      }
      `,
    },
   
    MuiAutocomplete: {
      styleOverrides: {
       
        
      },
    },
  },
});
export default theme;