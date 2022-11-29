import { Header } from '@/components/Common/Header'
import { PrivateRoutes } from '@/config'
import Box from '@mui/material/Box'
import { Category } from './components'
import { AddCategoryDialog } from './components/AddCategoryDialog'
import { useNotes } from './hooks'

export default function Dashboard () {
  const { notes } = useNotes()

  return (
    <>
      <Header
        navRoutes={{ ignore: [PrivateRoutes.DASHBOARD.key] }}
        navActions={<AddCategoryDialog />}
      />
      <Box
        sx={DashboardStyles}
        className='page_dashboard'
      >
        {notes.map(categoryNote => (
          <Category
            key={categoryNote.name}
            name={categoryNote.name}
            notes={categoryNote.items}
          />
        ))}
      </Box>
    </>
  )
}

const DashboardStyles = {
  width: '100%',
  height: theme => `calc(100vh - ${theme.components.Header.height})`,
  overflowX: 'auto',
  overflowY: 'hidden',
  display: 'flex',
  justifyContent: 'flex-start',
  gap: 2,
  px: 2
}
