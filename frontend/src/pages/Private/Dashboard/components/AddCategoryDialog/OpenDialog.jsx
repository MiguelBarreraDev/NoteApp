import Button from '@mui/material/Button'

export default function OpendDialog ({ handleClick }) {
  return (
    <Button
      sx={ButtonStyle}
      variant='outlined'
      onClick={handleClick}
    >
      Add category
    </Button>
  )
}

const ButtonStyle = {
  whiteSpace: 'nowrap',
  width: { xs: 'clamp(80px, 30vw, 130px)', sm: 'clamp(130px, 20vw, 150px)' },
  border: '1px solid',
  borderColor: 'primary.light',
  color: 'primary.light',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    borderColor: 'primary.light',
    backgroundColor: 'primary.light',
    color: 'Text.contrast'
  }
}
