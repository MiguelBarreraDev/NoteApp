import { NoDataIlustration } from '@/assets/images/ilustration'
import { Header } from '@/components/Common/Header'
import { PrivateRoutes } from '@/config'
import { Typography } from '@mui/material'
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
        {notes.length > 0
          ? (notes.map(categoryNote => (
          <Category
            key={categoryNote.name}
            name={categoryNote.name}
            notes={categoryNote.items}
          />
            )))
          : (
            <Box
            flex={1}
            flexDirection='column'
            display='flex'
            justifyContent='center'
            alignItems='center'
            gap={4}
            >
          <NoDataIlustration
            styles={{
              width: 'clamp(50px, 80%, 200px)',
              height: 'fit-content'
            }}
              />
              <Typography
                align='center'
                variant='h5'
                sx={{
                  fontWeight: 'bold',
                  opacity: 0.5
                }}
              >
                You have no registered categories
              </Typography>
            </Box>
            )}
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
