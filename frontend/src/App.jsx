import './App.css'
import { Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './config/routes'
import { RoutesWithNotFound, toList } from './utilities'
import { AuthGuard } from './guards'
import CssBaseline from '@mui/material/CssBaseline'
import { lazy, Suspense } from 'react'
import { useRecoverUser } from './hooks'
import { ShowError } from './components/ShowError'
import { Loading } from './components/Loading'

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
      {!loading && (
        <Suspense fallback={<Loading />}>
          <CssBaseline />
          <RoutesWithNotFound>
            {toList(PublicRoutes).map(setPublicRoute)}
            <Route element={<AuthGuard />}>
              <Route
                path={`${PrivateRoutes.PRIVATE.route}/*`}
                element={<Private />}
              />
            </Route>
          </RoutesWithNotFound>
          <ShowError />
        </Suspense>
      )}
    </>
  )
}

export default App