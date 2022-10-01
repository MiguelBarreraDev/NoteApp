import Box from '@mui/material/Box'
import { PublicRoutes } from '@/config'
import { toList } from '@/utitlities'
import { ActiveLink } from '@/components/ActiveLink'

export default function Nav () {
  const getLinks = (dictionary, listToIgnore = []) => {
    return null && toList(dictionary)
      .filter(routeObject => !listToIgnore.includes(routeObject.key))
      .map(routeObject => (
        <ActiveLink key={routeObject.key} to={routeObject.route}>
          {routeObject.name}
        </ActiveLink>
      ))
  }

  return (
    <Box>
      {getLinks(PublicRoutes, [PublicRoutes.LOGIN.key, PublicRoutes.SIGNUP.key])}
    </Box>
  )
}
