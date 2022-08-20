import { NANavLink } from "@/components/NANavLink"
import Typography from '@mui/material/Typography'
import { PrivateRoutes } from "@/config"

const titleStyle = {
  background: theme => {
    const { primary, secondary  } = theme.palette
    return `linear-gradient(to right, ${secondary.main}, ${primary.main})`
  },
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
