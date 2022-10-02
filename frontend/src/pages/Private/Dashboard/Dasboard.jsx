import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Dashboard () {
  return (
    <Box
      sx={{
        width: '100%',
        height: theme => `calc(100vh - ${theme.components.Header.height})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Typography variant='h1' color='Text.light'>
        Notes
      </Typography>
    </Box>
  )
}
