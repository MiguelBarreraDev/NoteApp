import { useAuth } from '@/hooks'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'

const NavLinkStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  textTransform: 'capitalize',
  whiteSpace: 'nowrap'
}

export default function ActiveLink ({ to, children }) {
  const { isLogged } = useAuth()
  let target = ''

  if (to === '/') target = to
  else target = isLogged ? `/auth/${to}` : to

  return (
    <Box
      sx={{
        px: '.4em',
        borderRadius: '5px',
        '& a': {
          color: 'Text.light'
        },
        '&:hover': {
          transition: 'all .2s ease-in',
          backgroundColor: (theme) => {
            const { main } = theme.palette.primary
            return theme.functions.rgba(main, 0.1)
          }
        }
      }}
    >
      <NavLink
        to={target}
        style={NavLinkStyle}
        replace
      >
        {children}
      </NavLink>
    </Box>
  )
}
