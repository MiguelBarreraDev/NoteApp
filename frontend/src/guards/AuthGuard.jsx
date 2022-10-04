import { PublicRoutes } from '@/config'
import { useLogin } from '@/hooks'
import { Outlet, Navigate } from 'react-router-dom'

export default function AuthGuard () {
  const { isLogged } = useLogin()

  return isLogged
    ? <Outlet />
    : <Navigate to={PublicRoutes.LOGIN.route} />
}
