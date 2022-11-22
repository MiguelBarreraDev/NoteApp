import Button from '@mui/material/Button'

export default function Actions ({ close, reset }) {
  return (
    <>
      <Button
        sx={buttonStyles}
        variant='outlined'
        onClick={close}
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
