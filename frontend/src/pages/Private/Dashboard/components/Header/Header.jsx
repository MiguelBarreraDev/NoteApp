import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Header ({ title }) {
  return (
    <Box sx={{ py: 1 }}>
      <Typography sx={{ fontSize: '1.2em', fontWeight: 'bold' }}>
        {title}
      </Typography>
    </Box>
  )
}
