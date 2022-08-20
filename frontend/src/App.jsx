import './App.css'
import { Route, Navigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './config/routes'
import { Login } from './pages/Login'
import { Private } from './pages/Private'
import { RoutesWithNotFound } from './utitlities'
import { AuthGuard } from './guards'
import CssBaseline from '@mui/material/CssBaseline'
import { SignUp } from './pages/SingUp'
import { Header } from './components/Common/Header'

function App () {
  return (
    <>
      <CssBaseline />
      <Header />
      <RoutesWithNotFound>
        <Route path='/' element={<Navigate to={PublicRoutes.LOGIN.route} />} />
        <Route path={PublicRoutes.LOGIN.route} element={<Login />} />
        <Route path={PublicRoutes.SIGNUP.route} element={<SignUp />} />
        <Route element={<AuthGuard />}>
          <Route path={`${PrivateRoutes.PRIVATE.route}/*`} element={<Private />} />
        </Route>
        <Route path='/*' element={<>Not Found</>} />
      </RoutesWithNotFound>
    </>
  )
}

export default App
