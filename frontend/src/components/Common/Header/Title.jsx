import Typography from '@mui/material/Typography'
import { PrivateRoutes } from "@/config"
import LinkTo from '@/components/LinkTo/LinkTo'

const titleStyle = {
  background: theme => {
    const { primary, secondary  } = theme.palette
    return `linear-gradient(to right, ${primary.main}, ${secondary.main})`
  },
  webkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  fontWeight: 'bold'
}

export default function Title () {
  return (
    <LinkTo to={PrivateRoutes.PRIVATE.route} origin='start'>
      <Typography
        variant='h5'
        noWrap
        sx={titleStyle}
      >
        NoteApp
      </Typography>
    </LinkTo>
  )
}
