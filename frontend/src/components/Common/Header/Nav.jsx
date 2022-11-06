import Box from '@mui/material/Box'
import { PrivateRoutes, PublicRoutes } from '@/config'
import { toList } from '@/utilities'
import { ActiveLink } from '@/components/ActiveLink'
import { useAuth } from '@/hooks'
import { GroupAvatars } from '@/components/GroupAvatars'

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
    <Box display='flex' sx={{ flex: 1, justifyContent: 'flex-end' }}>
      {isLogged
        ? <Box display='flex' width='100%' justifyContent='space-between' alignItems='center'>
            <GroupAvatars />
            <Box display='flex'>
              <ShowLinks
                type='private'
                ignore={[PrivateRoutes.PRIVATE.key]}
              />
            </Box>
          </Box>
        : <ShowLinks
              type='public'
              ignore={[PublicRoutes.LOGIN.key, PublicRoutes.SIGNUP.key, PublicRoutes.HOME.key]}
          />
      }
    </Box>
  )
}
