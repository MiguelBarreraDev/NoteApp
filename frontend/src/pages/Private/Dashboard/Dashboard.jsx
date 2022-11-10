import Box from '@mui/material/Box'
import { Category } from './components'
import { useNotes } from './hooks'

export default function Dashboard () {
  const { notes } = useNotes()

  return (
    <Box sx={DashboardStyles}>
      {notes.map(categoryNote => (
        <Category
          key={categoryNote.name}
          name={categoryNote.name}
          notes={categoryNote.items}
        />
      ))}
    </Box>
  )
}

const DashboardStyles = {
  width: '100%',
  height: theme => `calc(100vh - ${theme.components.Header.height})`,
  overflowX: 'auto',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: 2,
  px: 2
}
