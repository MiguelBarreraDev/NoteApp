import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from './assets/themes/lightTheme'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={lightTheme}>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </ThemeProvider>
)
