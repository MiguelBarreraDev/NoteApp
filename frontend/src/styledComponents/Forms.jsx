import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

const AuthenticateFormContainerStyle = {
  overflow: 'hidden',
  pt: 8,
  px: 2,
  height: theme => `calc(100vh - ${theme.components.Header.height})`,
  maxHeight: theme => `calc(100vh - ${theme.components.Header.height})`
}
export const AuthenticateFormContainer = ({ sx, ...props }) => (
  <Box {...props} sx={{ ...AuthenticateFormContainerStyle, ...sx }} />
)

const FormGridContainerStyle = {
  position: 'relative',
  maxWidth: '350px',
  width: '100%',
  margin: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  py: 4,
  zIndex: 100,
  backgroundColor: '#FFF',
  px: 2,
  borderRadius: 2,
  gap: 1
}
export const FormGridContainer = ({ sx, ...props }) => (
  <Grid
    container
    component='form'
    {...props}
    sx={{ ...FormGridContainerStyle, ...sx }}
  />
)

const FormGridItemStyle = {
  my: 0.5,
  width: '100%',
  textAlign: 'center'
}
export const FormGridItem = ({ sx, ...props }) => (
  <Grid item {...props} sx={{ ...FormGridItemStyle, ...sx }} />
)

const SubmitButtonStyle = {
  maxWidth: '350px',
  margin: '0 auto',
  mt: 4,
  width: '100%',
  fontSize: '1.3em',
  textTransform: 'none',
  backgroundColor: 'primary.main',
  fontWeight: 'bold',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    backgroundColor: 'primary.dark'
  },
  '&.MuiButtonBase-root.MuiButton-root.Mui-disabled': {
    backgroundColor: theme => theme.functions.rgba(theme.palette.primary.main, 0.8),
    color: '#fff7'
  }
}
export const SubmitButton = (props) => (
  <Button type='submit' {...props} sx={SubmitButtonStyle}/>
)

const CustomTextFieldStyle = {
  backgroundColor: theme => theme.functions.rgba(theme.palette.Text.light, 0.04),
  width: '100%',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'Text.main'
  },
  '& .MuiFormLabel-root.MuiInputLabel-root': {
    color: theme => theme.functions.rgba(theme.palette.Text.primary, 0.5)
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'primary.main'
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'primary.main'
  },
  '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
    color: 'primary.main'
  }
}
export const CustomTextField = (props) => (
  <TextField {...props} sx={CustomTextFieldStyle}/>
)
