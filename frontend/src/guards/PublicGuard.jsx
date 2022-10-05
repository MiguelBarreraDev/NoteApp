import { PrivateRoutes } from '@/config'
import { useAuth } from '@/hooks'
import { Navigate, Outlet } from 'react-router-dom'

export default function PublicGuard () {
  const { isLogged } = useAuth()
  return isLogged
    ? <Navigate to={PrivateRoutes.PRIVATE.route} />
    : <Outlet />
}
