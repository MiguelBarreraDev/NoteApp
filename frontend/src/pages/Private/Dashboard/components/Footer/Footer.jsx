import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import Typography from '@mui/material/Typography'

export default function Footer () {
  return (
    <Box
      display='flex'
      justifyContent='center'
      sx={{ py: 1 }}
    >
      <Button>
        <Typography
          variant='button'
          display='flex'
          sx={ContentButtonStyles}
        >
          <AddIcon /> Add new note
        </Typography>
      </Button>
    </Box>
  )
}

const ContentButtonStyles = {
  fontWeight: 'bold',
  color: '#555',
  cursor: 'pointer',
  ':hover': {
    color: 'primary.main'
  },
  ':active': {
    color: 'primary.light'
  },
  ':hover svg': {
    transition: 'transform .5s ease-in-out',
    transform: 'rotate(90deg)'
  }
}
