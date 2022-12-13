import Typography from '@mui/material/Typography'
import LinkTo from '@/components/LinkTo/LinkTo'

const titleStyle = {
  background: theme => {
    const { primary, secondary } = theme.palette
    return `linear-gradient(to right, ${primary.main}, ${secondary.main})`
  },
  webkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  fontSize: '1.4em',
  fontWeight: 'bold'
}

export default function Title () {
  return (
    <LinkTo to='/' origin='start'>
      <Typography
        variant='h1'
        noWrap
        sx={titleStyle}
      >
        AppNote
      </Typography>
    </LinkTo>
  )
}
