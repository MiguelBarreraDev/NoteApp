import { NANavLink } from "@/components/NANavLink"
import Typography from '@mui/material/Typography'
import { PrivateRoutes } from "@/config"

const titleStyle = {
  background: 'linear-gradient(to right, #2ebf91, #8360c3)',
  webkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  fontWeight: 'bold'
}

export default function Title () {
  return (
    <NANavLink to={PrivateRoutes.PRIVATE.route} origin='start'>
      <Typography
        variant='h5'
        noWrap
        sx={titleStyle}
      >
        NoteApp
      </Typography>
    </NANavLink>
  )
}
