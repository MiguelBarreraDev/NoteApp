import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { PrivateRoutes, PublicRoutes } from '@/config'
import { NANavLink } from '@/components/NANavLink'
import { toList } from '@/utitlities'
import Button from '@mui/material/Button'
import LoginIcon from '@mui/icons-material/Login'
import IconButton from '@mui/material/IconButton'
import { LinkButton } from '@/components/LinkButton'
import Title from './Title'
import Nav from './Nav'
import CallActions from './CallActions'

export default function Header () {
  return (
    <AppBar position='sticky' sx={AppBarStyle}>
      <Container sx={ContainerStyle} maxWidth='xl'>
        <Title />
        <Nav />
        <CallActions />
      </Container>
    </AppBar>
  )
}

const AppBarStyle = {
  height: '50px',
  justifyContent: 'center',
  background: 'transparent',
  py: 3.5,
  boxShadow: 'none'
}

const ContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap'
}
