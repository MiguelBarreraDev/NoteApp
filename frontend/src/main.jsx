import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ThemeProvider } from '@mui/material/styles'
import { lightTheme } from './assets/themes/lightTheme'
import { darkTheme } from './assets/themes/darkTheme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
