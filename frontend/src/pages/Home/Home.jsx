import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { NotesIlustration } from '@/assets/images'

export default function Home () {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: (theme) => `calc(100vh - ${theme.components.Header.height})`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'center',
        px: 2
      }}
    >
      <NotesIlustration
        styles={{
          width: 'clamp(50px, 80%, 430px)',
          height: 'fit-content'
        }}
      />
      <Box>
        <Typography variant='h4' color='Text.light' align='center'>
          Manten Tus ideas Organizadas,
          <Typography variant='inherit' color='primary.light'>
            Sin Morir En El Intento
          </Typography>
        </Typography>
      </Box>
    </Box>
  )
}
