import './App.css'
import { Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './config/routes'
import { RoutesWithNotFound, toList } from './utitlities'
import { AuthGuard } from './guards'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from './components/Common/Header'
import { lazy, Suspense } from 'react'
import { useRecoverUser } from './hooks'

const Private = lazy(() => import('@/pages/Private/Private'))

function App () {
  const { loading } = useRecoverUser()

  // We form routes from the information of a route encapsulated
  // in an object passed as a parameter
  const setPublicRoute = ({ route, key, Component }) => (
    <Route key={key} path={route} element={<Component />} />
  )

  return (
    <>
      {!loading && <Suspense fallback={<>Loading...</>}>
        <CssBaseline />
        <Header />
        <RoutesWithNotFound>
          {toList(PublicRoutes).map(setPublicRoute)}
          <Route element={<AuthGuard />}>
            <Route path={`${PrivateRoutes.PRIVATE.route}/*`} element={<Private />} />
          </Route>
        </RoutesWithNotFound>
      </Suspense>}
    </>
  )
}

export default App
