import TextField from '@mui/material/TextField'

export default function Form ({ getAttributes }) {
  return (
    <TextField
      required
      autoFocus
      margin="dense"
      label="Category name"
      fullWidth
      variant="outlined"
      {...getAttributes('name')}
    />
  )
}
