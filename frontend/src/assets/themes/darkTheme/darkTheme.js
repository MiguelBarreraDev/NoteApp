import { createTheme } from '@mui/material/styles'
import rgba from '../common/functions/rgba'

export default createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#101010'
    },
    primary: {
      main: 'rgb(131, 96, 195)',
      dark: 'rgb(94, 68, 143)',
      light: 'rgb(150, 112, 220)'
    },
    secondary: {
      main: 'rgb(46, 191, 145)',
      dark: 'rgb(34, 140, 106)',
      light: 'rgb(55, 230, 174)'
    },
    text: {
      primary: '#FFFFFF'
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
  functions: {
    rgba
  }
})
