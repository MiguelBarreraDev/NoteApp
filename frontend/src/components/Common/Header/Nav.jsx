import Box from '@mui/material/Box'
import { PublicRoutes } from '@/config'
import { toList } from '@/utitlities'
import { ActiveLink } from '@/components/ActiveLink'

export default function Nav () {
  const getLinks = (dictionary, listToIgnore = []) => (
    toList(dictionary)
      .filter(routeObject => !listToIgnore.includes(routeObject.key))
      .map(routeObject => <ActiveLink key={routeObject.key} data={routeObject} />)
  )

  return (
    <Box>
      {getLinks(PublicRoutes, [PublicRoutes.LOGIN.key, PublicRoutes.SIGNUP.key])}
    </Box>
  )
}
