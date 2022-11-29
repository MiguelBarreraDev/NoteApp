import { createTheme } from '@mui/material/styles'
import { typography } from '../common'
import rgba from '../common/functions/rgba'

export default createTheme({
  palette: {
    background: {
      default: '#ECEFF4'
    },
    primary: {
      main: '#3E54D3',
      lightHard: '#CAD3FF'
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
          overflowX: 'hidden',
          minWidth: '360px',
          minHeight: '100vh'
        }
      }
    },
    Header: {
      height: '56px'
    }
  },
  typography,
  functions: {
    rgba
  }
})
