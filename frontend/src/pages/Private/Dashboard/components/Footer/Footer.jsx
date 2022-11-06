import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Footer () {
  return (
    <Box
      display='flex'
      justifyContent='center'
      sx={{
        py: 1
      }}
    >
      <Typography variant='button'>
        + Add new note
      </Typography>
    </Box>
  )
}
