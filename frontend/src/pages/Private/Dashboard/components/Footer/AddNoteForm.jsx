import TextField from '@mui/material/TextField'

export default function AddNoteForm ({ getAttributes }) {
  return (
    <>
      <TextField
        required
        autoFocus
        margin="dense"
        label="Title"
        fullWidth
        variant="outlined"
        {...getAttributes('title')}
      />
      <TextField
        required
        type='textarea'
        margin="dense"
        label="Write your note"
        fullWidth
        variant="outlined"
        multiline
        rows={4}
        {...getAttributes('body')}
      />
    </>
  )
}
