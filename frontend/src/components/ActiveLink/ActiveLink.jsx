import { NavLink } from 'react-router-dom'

const NavLinkStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#FFFFFF',
  textTransform: 'capitalize',
  whiteSpace: 'nowrap',
  padding: '5px 15px',
}

export default function ActiveLink ({ children, origin, renderIcon, ...props }) {
  const aditionalStyles = {}

  if (origin === 'start') aditionalStyles.paddingLeft = '0'
  if (renderIcon === true) aditionalStyles.padding = '0'

  return (
    <NavLink {...props} style={{ ...NavLinkStyle, ...aditionalStyles }}>
      {children}
    </NavLink>
  )
}
