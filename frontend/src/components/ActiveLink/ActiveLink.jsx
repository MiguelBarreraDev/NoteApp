import { NavLink } from 'react-router-dom'

const NavLinkStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#FFFFFF',
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
  padding: '5px 15px'
}

export default function ActiveLink ({ ...props }) {
  return (
    <NavLink {...props} style={NavLinkStyle} />
  )
}
