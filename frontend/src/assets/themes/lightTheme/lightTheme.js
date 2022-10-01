import { createTheme } from '@mui/material/styles'
import rgba from '../common/functions/rgba'

export default createTheme({
  palette: {
    background: {
      default: '#ECEFF4'
    },
    primary: {
      main: '#3E54D3'
    },
    secondary: {
      main: '#15CDCA'
    },
    Text: {
      main: '#202020',
      dark: '#101010',
      light: '#272727',
      contrast: '#FFFFFF'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowX: 'hidden'
        }
      }
    },
    Header: {
      height: '56px'
    }
  },
  typography: {
    h1: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    h2: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    h3: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    h4: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    h5: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    h6: {
      fontFamily: '"Montserrat", "Roboto", "Helvetica", "Arial", sans-serif'
    }
  },
  functions: {
    rgba
  }
})
