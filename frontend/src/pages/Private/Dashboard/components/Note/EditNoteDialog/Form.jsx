import TextField from '@mui/material/TextField'

export default function Form ({ getAttributes }) {
  return (
    <>
      <TextField
        required
        autoFocus
        margin="dense"
        label="title"
        fullWidth
        variant="outlined"
        disabled
        {...getAttributes('title')}
      />
      <TextField
        required
        multiline
        autoFocus
        margin="dense"
        label="Write your note"
        fullWidth
        variant="outlined"
        rows={4}
        {...getAttributes('body')}
      />
    </>
  )
}
