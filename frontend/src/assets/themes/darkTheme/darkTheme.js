import { createTheme } from '@mui/material/styles'

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
  }
})
