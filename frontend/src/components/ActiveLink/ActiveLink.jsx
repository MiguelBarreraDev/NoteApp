import { useAuth } from '@/hooks'
import { NavLink } from 'react-router-dom'

const NavLinkStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#000000',
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
  padding: '5px 15px'
}

export default function ActiveLink ({ to, children }) {
  const { isLogged } = useAuth()

  return (
    <NavLink
      to={isLogged ? `/auth/${to}` : to}
      style={NavLinkStyle}
      replace
    >
      {children}
    </NavLink>
  )
}
