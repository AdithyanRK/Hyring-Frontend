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
    // fontFamily: ,
  },
  components: {
    // Name of the component
    MuiCssBaseline: {
      // styleOverrides: ,
    },
   
    MuiAutocomplete: {
      styleOverrides: {
       
        
      },
    },
  },
});
export default theme;