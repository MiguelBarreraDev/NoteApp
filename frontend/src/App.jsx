import './App.css'
import { Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './config/routes'
import { RoutesWithNotFound, toList } from './utitlities'
import { AuthGuard, PublicGuard } from './guards'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from './components/Common/Header'
import { Provider } from 'react-redux'
import { store } from './redux'
import { lazy, Suspense } from 'react'

const Private = lazy(() => import('@/page/Private/Private'))

function App () {
  const setPublicRoute = ({ route, key, Component }) => (
    <Route key={key} path={route} element={<Component />} />
  )

  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Provider store={store}>
          <CssBaseline />
          <Header />
          <RoutesWithNotFound>
            <Route element={<PublicGuard />}>
              {toList(PublicRoutes).map(setPublicRoute)}
            </Route>
            <Route element={<AuthGuard />}>
              <Route path={`${PrivateRoutes.PRIVATE.route}/*`} element={<Private />} />
            </Route>
          </RoutesWithNotFound>
        </Provider>
      </Suspense>
    </>
  )
}

export default App
