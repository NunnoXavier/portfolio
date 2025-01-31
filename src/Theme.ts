import { createTheme, responsiveFontSizes } from "@mui/material";

let Theme = createTheme({
    palette: {
        primary: {
            main: '#1c2833'
          },
        secondary: {
            main: '#0b5345'
          }
    },
    typography: {
      fontFamily: [
//        '"Segoe UI"', 
//        'Roboto', 
        '"Helvetica Neue"',
      ]
    }
})

Theme = responsiveFontSizes(Theme)

  export default Theme