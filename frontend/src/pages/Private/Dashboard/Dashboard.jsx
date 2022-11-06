import Box from '@mui/material/Box'
import { Category } from './components'

export default function Dashboard () {
  return (
    <Box
      sx={{
        width: '100%',
        height: theme => `calc(100vh - ${theme.components.Header.height})`,
        display: 'flex',
        justifyContent: 'flex-start',
        gap: 2,
        pl: 2
      }}
    >
      <Category />
    </Box>
  )
}
