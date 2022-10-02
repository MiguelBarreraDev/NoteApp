import { PrivateRoutes } from '@/config/routes'
import { RoutesWithNotFound } from '@/utitlities'
import { Route, Navigate } from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { Profile } from './Profile'

export default function Private () {
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD.route} />} />
      <Route path={PrivateRoutes.DASHBOARD.route} element={<Dashboard />} />
      <Route path={PrivateRoutes.PROFILE.route} element={<Profile />} />
    </RoutesWithNotFound>
  )
}
