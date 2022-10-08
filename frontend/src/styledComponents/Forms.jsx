import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'

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
    autoComplete='off'
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

const SubmitButtonStyle = (props) => ({
  position: 'relative',
  zIndex: 2000,
  maxWidth: '350px',
  margin: '0 auto',
  mt: 4,
  width: '100%',
  fontSize: '1.3em',
  textTransform: 'none',
  backgroundColor: `${props.color}.main`,
  fontWeight: 'bold',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    backgroundColor: `${props.color}.dark`
  },
  '&.MuiButtonBase-root.MuiButton-root.Mui-disabled': {
    backgroundColor: theme => theme.functions.rgba(theme.palette[props.color].main, 0.7),
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: '-1',
      backgroundColor: '#aaa5'
    },
    color: theme => theme.functions.rgba(theme.palette.Text.contrast, 0.5)
  }
})
export const SubmitButton = ({ color = 'primary', ...props }) => (
  <Button type='submit' {...props} sx={SubmitButtonStyle({ color })}/>
)

const CustomTextFieldStyle = (props) => ({
  backgroundColor: theme => theme.functions.rgba(theme.palette.Text.light, 0.04),
  width: '100%',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme => theme.functions.rgba(theme.palette.Text.main, 0.2)
  },
  '& .MuiFormLabel-root.MuiInputLabel-root': {
    color: theme => theme.functions.rgba(theme.palette.Text.main, 0.5)
  },
  '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: `${props.color}.main`
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: `${props.color}.main`
  },
  '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
    color: `${props.color}.main`
  }
})
export const CustomTextField = ({ color = 'primary', ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  const { type, ...otherProps } = props

  return <TextField
    {...otherProps}
    type={type === 'password' && showPassword ? 'text' : type}
    sx={CustomTextFieldStyle({ color })}
    InputProps={type === 'password'
      ? {
          endAdornment: (
            <InputAdornment position='end' sx={{ margin: 0 }}>
              <IconButton
                onClick={() => setShowPassword(cs => !cs)}
                edge='end'
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }
      : {} }
  />
}
