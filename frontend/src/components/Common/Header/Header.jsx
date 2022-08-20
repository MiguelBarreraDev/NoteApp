import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
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
  height: theme => theme.components.Header.height,
  justifyContent: 'center',
  background: 'transparent',
  boxShadow: 'none'
}

const ContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'nowrap'
}
