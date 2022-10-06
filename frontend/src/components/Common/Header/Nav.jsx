import Box from '@mui/material/Box'
import { PrivateRoutes, PublicRoutes } from '@/config'
import { toList } from '@/utitlities'
import { ActiveLink } from '@/components/ActiveLink'
import { useAuth } from '@/hooks'

export default function Nav () {
  const { isLogged } = useAuth()

  const getLinks = (dictionary, listToIgnore = []) => {
    return isLogged
      ? toList(dictionary)
        .filter(routeObject => !listToIgnore.includes(routeObject.key))
        .map(routeObject => (
          <ActiveLink key={routeObject.key} to={routeObject.route}>
            {routeObject.name}
          </ActiveLink>
        ))
      : null
  }

  return (
    <Box display='flex'>
      {isLogged
        ? getLinks(PrivateRoutes, [PrivateRoutes.PRIVATE.key])
        : getLinks(PublicRoutes, [PublicRoutes.LOGIN.key, PublicRoutes.SIGNUP.key])}
    </Box>
  )
}
