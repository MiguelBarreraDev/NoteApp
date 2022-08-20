import Box from '@mui/material/Box'
import { NANavLink } from '@/components/NANavLink'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { PublicRoutes } from '@/config'
import LoginIcon from '@mui/icons-material/Login'

export default function CallActions () {
  return (
    <Box sx={ButtonsContainerStyle}>
      <Button
        variant='outlined'
        sx={signupButtonStyle}
      >
        <NANavLink to={PublicRoutes.SIGNUP.route}>
          {PublicRoutes.SIGNUP.name}
        </NANavLink>
      </Button>
      <Button
        variant='contained'
        sx={loginButtonStyle}
      >
        <NANavLink to={PublicRoutes.LOGIN.route}>
          {PublicRoutes.LOGIN.name}
        </NANavLink>
      </Button>
      <IconButton sx={IconButtonStyle}>
        <NANavLink
          to={PublicRoutes.LOGIN.route}
          renderIcon
        >
          <LoginIcon />
        </NANavLink>
      </IconButton>
    </Box>
  )
}

const ButtonsContainerStyle = {
  display: 'flex',
  alignItems: 'center'
}

const loginButtonStyle = {
  p: 0,
  border: '1px solid #8360c3',
  backgroundColor: '#8360c3',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    backgroundColor: '#8360c3'
  },
  display: { xs: 'none', sm: 'block' }
}

const IconButtonStyle = {
  display: { sx: 'block', sm: 'none' },
  '& svg': {
    color: '#8360c3'
  }
}

const signupButtonStyle = {
  p: 0,
  mx: 1,
  ml: { xs: 0, sx: 'auto' },
  background: 'transparent',
  border: '1px solid #8360c3',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    border: '1px solid #8360c3'
  }
}
