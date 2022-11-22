import { Button } from '@mui/material'

export default function Actions ({ close, reset }) {
  const handleCancel = () => {
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
