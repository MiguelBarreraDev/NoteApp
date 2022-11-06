import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useAuth } from '@/hooks'

export default function Profile () {
  const { user, logout } = useAuth()

  return (
    <Box
      sx={{
        width: '100%',
        height: theme => `calc(100vh - ${theme.components.Header.height})`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2
      }}
    >
      <Typography variant='h1' color='Text.light'>
        Notes
      </Typography>
      <Typography variant='h4' color='Text.light'>
        {`"${user.username}"`}
      </Typography>
      <Button variant='outlined' onClick={() => logout()}>
        LOGOUT
      </Button>
    </Box>
  )
}
