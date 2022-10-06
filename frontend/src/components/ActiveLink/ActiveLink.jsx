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

export default function ActiveLink ({ ...props }) {
  const { isLogged } = useAuth()
  const { to, ...otherProps } = props

  return (
    <NavLink
      to={isLogged ? `auth/${to}` : to}
      {...otherProps}
      style={NavLinkStyle}
    />
  )
}
