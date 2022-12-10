import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useMyForm } from '@/hooks'

export default function FormDialog ({
  title,
  RenderButton,
  RenderActions,
  RenderContent,
  initialForm = {},
  onSubmit
}) {
  const { values, getAttributes, reset, submit } = useMyForm(initialForm)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    // TODO: Check the renders and states values
    reset()
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    reset()
  }

  const handleSubmit = (values) => {
    onSubmit(values, handleClose)
  }

  return (
    <div>
      <RenderButton handleClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
        <form onSubmit={submit(handleSubmit)}>
          <DialogTitle align='center'>{title}</DialogTitle>
          <DialogContent>
            <RenderContent getAttributes={getAttributes} />
          </DialogContent>
          <DialogActions sx={{ px: 3 }}>
            <RenderActions
              close={handleClose}
              values={values}
              reset={reset}
            />
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
