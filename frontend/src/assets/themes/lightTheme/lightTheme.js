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
      primary: '#202020',
      dark: '#101010',
      light: '#272727',
      contrast: '#FFFFFF'
    }
  },
  components: {
    Header: {
      height: '56px'
    }
  },
  functions: {
    rgba
  }
})
