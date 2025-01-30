import { createTheme, responsiveFontSizes } from "@mui/material";

let Theme = createTheme({
    palette: {
        primary: {
            main: '#d6dbdf'
          },
        secondary: {
            main: '#a9cce3'
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