import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Title from './Title'
import Nav from './Nav'
import CallActions from './CallActions'
import { useLocation } from 'react-router-dom'

export default function Header () {
  const { pathname } = useLocation()

  return (
    <AppBar position='sticky' sx={AppBarStyle({ pathname })}>
      <Container sx={ContainerStyle} maxWidth='xl'>
        <Title />
        <Nav />
        <CallActions />
      </Container>
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
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap'
}
