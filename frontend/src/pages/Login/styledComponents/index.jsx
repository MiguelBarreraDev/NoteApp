import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

const FormGridContainerStyle = {
  position: 'relative',
  maxWidth: '350px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  py: 4,
  zIndex: 100
}
export const FormGridContainer = props => (
  <Grid
    container
    component='form'
    {...props}
    sx={FormGridContainerStyle}
  />
)

const FormGridItemStyle = {
  my: 1,
  width: '90%',
  textAlign: 'center'
}
export const FormGridItem = props => (
  <Grid item {...props} sx={FormGridItemStyle}/>
)

const AuthenticateFormContainerStyle = {
  overflow: 'hidden',
  pt: 8,
  height: theme => `calc(100vh - ${theme.components.Header.height})`,
  maxHeight: theme => `calc(100vh - ${theme.components.Header.height})`,
}
export const AuthenticateFormContainer = (props) => (
  <Box {...props} sx={AuthenticateFormContainerStyle} />
)

const SubmitButtonStyle = {
  mt: 4,
  width: '100%',
  backgroundColor: 'primary.main',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    backgroundColor: 'primary.light'
  },
  '&.MuiButtonBase-root.MuiButton-root.Mui-disabled': {
    backgroundColor: 'primary.dark',
  }
}
export const SubmitButton = (props) => (
  <Button type='submit' {...props} sx={SubmitButtonStyle}/>
)

const CustomTextFieldStyle = {
  width: '100%',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme => (
      theme.functions.rgba('#FFFFFF', .7)
    ),
  },
  '& .MuiFormLabel-root.MuiInputLabel-root': {
    color: theme => (
      theme.functions.rgba('#FFFFFF', .5)
    )
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'primary.main'
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'primary.main',
  },
  '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
    color: 'primary.main'
  },
}
export const CustomTextField = (props) => (
  <TextField {...props} sx={CustomTextFieldStyle}/>
)
