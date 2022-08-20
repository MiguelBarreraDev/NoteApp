import { PrivateRoutes } from '@/config/routes'
import { RoutesWithNotFound } from '@/utitlities'
import { Route, Navigate } from 'react-router-dom'
import { Notes } from './Notes'
import { Profile } from './Profile'

export default function Private () {
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.NOTES.route} />} />
      <Route path={PrivateRoutes.NOTES.route} element={<Notes />} />
      <Route path={PrivateRoutes.PROFILE.route} element={<Profile />} />
    </RoutesWithNotFound>
  )
}
