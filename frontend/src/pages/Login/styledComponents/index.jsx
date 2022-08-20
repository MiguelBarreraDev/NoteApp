import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'

const FormGridContainerStyle = {
  position: 'relative',
  maxWidth: '350px !important',
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
  height: 'calc(100vh - 56px)',
  maxHeight: 'calc(100vh - 56px)',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(5px)',
    zIndex: 10
  }
}
export const AuthenticateFormContainer = (props) => (
  <Box {...props} sx={AuthenticateFormContainerStyle} />
)

const SubmitButtonStyle = {
  mt: 4,
  width: '100%',
  backgroundColor: '#8360c3',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    backgroundColor: '#8360c3'
  },
  '&.MuiButtonBase-root.MuiButton-root.Mui-disabled': {
    backgroundColor: '#8360c3',
  }
}
export const SubmitButton = (props) => (
  <Button type='submit' {...props} sx={SubmitButtonStyle}/>
)

const CustomTextFieldStyle = {
  width: '100%',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#FFFa'
  },
  '& .MuiFormLabel-root.MuiInputLabel-root': {
    color: '#FFF5'
  },
  '& .MuiInputBase-input.MuiOutlinedInput-input': {
    color: '#FFFFFF'
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#8360c3'
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#8360c3'
  }
}
export const CustomTextField = (props) => (
  <TextField {...props} sx={CustomTextFieldStyle}/>
)
