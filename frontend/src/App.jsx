import './App.css'
import { Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './config/routes'
import { RoutesWithNotFound } from './utitlities'
import { AuthGuard } from './guards'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from './components/Common/Header'
import { Provider } from 'react-redux'
import { store } from './redux'
import { Home, Login, Private, SignUp } from './pages'

function App () {
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <Header />
        <RoutesWithNotFound>
          <Route path='/' element={<Home />} />
          <Route path={PublicRoutes.LOGIN.route} element={<Login />} />
          <Route path={PublicRoutes.SIGNUP.route} element={<SignUp />} />
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE.route}/*`} element={<Private />} />
          </Route>
        </RoutesWithNotFound>
      </Provider>
    </>
  )
}

export default App
