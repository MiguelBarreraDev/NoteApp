import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'

export default function GroupAvatars () {
  return (
    <AvatarGroup max={4} sx={{ pl: 2 }} >
      <Avatar alt="Remy Sharp" />
      <Avatar alt="Travis Howard" />
      <Avatar alt="Cindy Baker" />
      <Avatar alt="Agnes Walker" />
      <Avatar alt="Trevor Henderson" />
    </AvatarGroup>
  )
}
