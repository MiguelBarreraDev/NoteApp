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
  width: { xs: 'clamp(80px, 30vw, 100px)', sm: 'clamp(130px, 20vw, 150px)' },
  border: '1px solid #8360c3',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    border: '1px solid #8360c3'
  }
}
