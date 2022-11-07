import Box from '@mui/material/Box'
import { Category } from './components'
import { notes } from './config'

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
      {notes.map(categoryNote => (
        <Category
          key={categoryNote?.category}
          name={categoryNote?.category}
          notes={categoryNote?.items}
        />
      ))}
    </Box>
  )
}
