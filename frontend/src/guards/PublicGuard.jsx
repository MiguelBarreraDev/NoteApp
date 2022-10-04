import { PrivateRoutes } from '@/config'
import { useLogin } from '@/hooks'
import { Navigate, Outlet } from 'react-router-dom'

export default function PublicGuard () {
  const { isLogged } = useLogin()
  return isLogged
    ? <Navigate to={PrivateRoutes.PRIVATE.route} />
    : <Outlet />
}
