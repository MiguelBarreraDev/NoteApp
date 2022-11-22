import Box from '@mui/material/Box'
import { PrivateRoutes, PublicRoutes } from '@/config'
import { toList } from '@/utilities'
import { ActiveLink } from '@/components/ActiveLink'
import { useAuth } from '@/hooks'

function ShowLinks ({ type, ignore = [] }) {
  const ignoreRoutes = [PrivateRoutes.PRIVATE.key, ...ignore]

  const routeObjecstList = toList(
    type === 'public' ? PublicRoutes : PrivateRoutes
  )

  routeObjecstList.unshift(PublicRoutes.HOME)

  const filteredRoutes = routeObjecstList
    .filter(routeObject => !ignoreRoutes.includes(routeObject.key))

  return filteredRoutes
    .map(routeObject => (
      <ActiveLink key={routeObject.key} to={routeObject.route}>
        {routeObject.name}
      </ActiveLink>
    ))
}

export default function Nav ({ actions, routes }) {
  const { isLogged } = useAuth()

  return (
    <Box display='flex' sx={{ flex: 1, justifyContent: 'flex-end' }}>
      {isLogged
        ? (
          <Box
            display='flex'
            width='100%'
            justifyContent='space-between'
            alignItems='center'
          >
            <Box display='flex'>
              <ShowLinks
                type='private'
                ignore={routes?.ignore}
              />
            </Box>
            <Box display='flex'>
              {actions}
            </Box>
          </Box>
          )
        : (
          <ShowLinks
            type='public'
            ignore={[
              PublicRoutes.LOGIN.key,
              PublicRoutes.SIGNUP.key,
              PublicRoutes.HOME.key
            ]}
          />
          )
      }
    </Box>
  )
}
