import Button from '@mui/material/Button'
import { useNotes } from '../../hooks'

export default function Actions ({ close, values, categoryName, reset }) {
  const { addNote } = useNotes()
  const handleCancel = () => {
    close()
    reset()
  }

  const handleAdd = () => {
    addNote({ categoryName, ...values })
    close()
    reset()
  }

  return (
    <>
      <Button
        sx={buttonStyles}
        variant='outlined'
        onClick={handleCancel}
      >
        Cancel
      </Button>
      <Button
        sx={buttonStyles}
        variant='contained'
        type='submit'
      >
        Add
      </Button>
    </>
  )
}

const buttonStyles = {
  minWidth: '100px'
}
