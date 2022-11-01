import Box from '@mui/material/Box'
import { PrivateRoutes, PublicRoutes } from '@/config'
import { toList } from '@/utilities'
import { ActiveLink } from '@/components/ActiveLink'
import { useAuth } from '@/hooks'

function ShowLinks ({ type, ignore }) {
  const routeObjecstList = toList(type === 'public' ? PublicRoutes : PrivateRoutes)
  const filteredRoutes = routeObjecstList.filter(routeObject => !ignore.includes(routeObject.key))

  return (
    filteredRoutes
      .map(routeObject => (
        <ActiveLink key={routeObject.key} to={routeObject.route}>
          {routeObject.name}
        </ActiveLink>
      ))
  )
}

export default function Nav () {
  const { isLogged } = useAuth()

  return (
    <Box display='flex'>
      {isLogged
        ? <ShowLinks
            type='private'
            ignore={[PrivateRoutes.PRIVATE.key, PrivateRoutes.PROFILE.key]}
          />
        : <ShowLinks
            type='public'
            ignore={[PublicRoutes.LOGIN.key, PublicRoutes.SIGNUP.key]}
          />}
    </Box>
  )
}
