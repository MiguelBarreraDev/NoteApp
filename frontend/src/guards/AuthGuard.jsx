import { PublicRoutes } from '@/config'
import { useAuth } from '@/hooks'
import { Outlet, Navigate } from 'react-router-dom'

export default function AuthGuard () {
  const { isLogged } = useAuth()

  return isLogged
    ? <Outlet />
    : <Navigate to={PublicRoutes.LOGIN.route} />
}
