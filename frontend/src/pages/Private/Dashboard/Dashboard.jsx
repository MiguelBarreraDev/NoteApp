import Box from '@mui/material/Box'

export default function Dashboard () {
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
      DASHBOARD
    </Box>
  )
}
