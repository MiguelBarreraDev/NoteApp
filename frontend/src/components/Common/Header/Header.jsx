import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Title from './Title'
import Nav from './Nav'
import CallActions from './CallActions'
import { useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks'
import AccountMenu from './AccountMenu'

export default function Header () {
  const { isLogged } = useAuth()
  const { pathname } = useLocation()

  return (
    <AppBar position='sticky' sx={AppBarStyle({ pathname })}>
      <Box sx={ContainerStyle}>
        <Title />
        <Nav />
        {isLogged ? <AccountMenu /> : <CallActions />}
      </Box>
    </AppBar>
  )
}

const AppBarStyle = (props) => ({
  height: theme => theme.components.Header.height,
  justifyContent: 'center',
  backgroundColor: props.pathname === '/' ? 'transparent' : '#FFFFFF',
  boxShadow: 'none'
})

const ContainerStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap',
  px: 2
}
