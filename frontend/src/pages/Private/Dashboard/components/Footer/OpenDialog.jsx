import AddIcon from '@mui/icons-material/Add'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function OpenDialog ({ handleClick }) {
  return (
    <Button onClick={handleClick}>
      <Typography
        variant='button'
        display='flex'
        sx={ContentButtonStyles}
      >
        <AddIcon /> Add new note
      </Typography>
    </Button>
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
