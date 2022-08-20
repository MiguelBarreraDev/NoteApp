import Box from '@mui/material/Box'
import { PublicRoutes  } from '@/config'
import { toList } from '@/utitlities'

export default function Nav () {
  const getLinks = (dictionary, listToIgnore = []) => (
    toList(dictionary)
      .filter(routeObject => !listToIgnore.includes(routeObject.key))
      .map(routeObject => <LinkButton key={routeObject.key} data={routeObject} />)
  )

  return (
    <Box>
      {getLinks(PublicRoutes, [PublicRoutes.LOGIN.key, PublicRoutes.SIGNUP.key])}
    </Box>
  )
}
