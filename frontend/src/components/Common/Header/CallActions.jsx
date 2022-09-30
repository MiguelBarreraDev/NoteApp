import Box from '@mui/material/Box'
import { PublicRoutes } from '@/config'
import { LinkButton } from '@/components/LinkButton'

export default function CallActions () {
  return (
    <Box sx={ButtonsContainerStyle}>
      <LinkButton
        sx={ButtonStyle}
        variant='outlined'
        to={PublicRoutes.SIGNUP.route}
      >
        {PublicRoutes.SIGNUP.name}
      </LinkButton>
      <LinkButton
        sx={ButtonStyle}
        variant='contained'
        to={PublicRoutes.LOGIN.route}
      >
        {PublicRoutes.LOGIN.name}
      </LinkButton>
    </Box>
  )
}

const ButtonsContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: { xs: 1, sm: 2 }
}

const ButtonStyle = {
  whiteSpace: 'nowrap',
  width: 'clamp(113px, 30vw, 150px)',
  border: '1px solid #8360c3',
  '&.MuiButtonBase-root.MuiButton-root:hover': {
    border: '1px solid #8360c3'
  }
}
