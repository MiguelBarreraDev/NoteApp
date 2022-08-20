import { PublicRoutes } from '@/config'
import { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export default function AuthGuard () {
  const [user, setUser] = useState(false)

  return user
    ? <Outlet />
    : <Navigate to={PublicRoutes.LOGIN.route} />
}
