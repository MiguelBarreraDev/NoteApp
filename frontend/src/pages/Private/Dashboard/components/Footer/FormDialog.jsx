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
  initialForm,
  categoryName
}) {
  const { values, getAttributes } = useMyForm(initialForm)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <RenderButton handleClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <RenderContent getAttributes={getAttributes} />
        </DialogContent>
        <DialogActions>
          <RenderActions categoryName={categoryName} close={handleClose} values={values}/>
        </DialogActions>
      </Dialog>
    </div>
  )
}
