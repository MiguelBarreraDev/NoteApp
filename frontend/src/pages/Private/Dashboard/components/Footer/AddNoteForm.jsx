import TextField from '@mui/material/TextField'

export default function AddNoteForm ({ getAttributes }) {
  return (
    <>
      <TextField
        autoFocus
        margin="dense"
        label="Title"
        fullWidth
        variant="outlined"
        {...getAttributes('title')}
      />
      <TextField
        margin="dense"
        label="Write your note"
        fullWidth
        variant="outlined"
        {...getAttributes('body')}
      />
    </>
  )
}
