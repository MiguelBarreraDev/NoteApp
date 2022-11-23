import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ModalFromMui from '@mui/material/Modal'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4
}

export default function Modal ({ RenderButton, label, title, body }) {
  const [edit, setEdit] = useState(false)
  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    setEdit(false)
  }

  return (
    <>
      <RenderButton handleClick={handleOpen}>{label}</RenderButton>
      <ModalFromMui
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            align='center'
            variant="h5"
            color='primary.main'
            sx={{ mb: 2, mx: 'auto', width: '80%', borderBottom: '1px solid #3E54D3' }}
          >
            {title}
          </Typography>
          <Typography onClick={() => setEdit(true)} sx={{ height: 'fit-content' }}>
            {body}
          </Typography>
        </Box>
      </ModalFromMui>
    </>
  )
}
