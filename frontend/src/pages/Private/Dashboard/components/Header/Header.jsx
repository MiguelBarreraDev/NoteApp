import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { MenuIcon } from '@/assets/images'

export default function Header ({ title }) {
  return (
    <Box
      display='flex'
      alignItems='center'
      sx={{ py: 0.5, whiteSpace: 'no-wrap' }}
      justifyContent='space-between'
    >
      <Typography
        variant='h6'
        sx={{
          fontSize: '1.2em',
          fontWeight: 'bold',
          color: 'Text.light'
        }}
      >
        {title}
      </Typography>
      <Box>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
