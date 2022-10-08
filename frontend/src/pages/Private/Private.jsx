import { PrivateRoutes } from '@/config/routes'
import { RoutesWithNotFound } from '@/utilities'
import { lazy } from 'react'
import { Route, Navigate } from 'react-router-dom'

const Dashboard = lazy(() => import('@/pages/Private/Dashboard/Dashboard'))
const Profile = lazy(() => import('@/pages/Private/Profile/Profile'))

export default function Private () {
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD.route} />} />
      <Route path={PrivateRoutes.DASHBOARD.route} element={<Dashboard />} />
      <Route path={PrivateRoutes.PROFILE.route} element={<Profile />} />
    </RoutesWithNotFound>
  )
}
