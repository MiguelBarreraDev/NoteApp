import { useAuth } from '@/hooks'
import Avatar from '@mui/material/Avatar'

export default function UserAvatar () {
  const { user } = useAuth()
  const fullname = `${user?.name} ${user?.surname}`

  return (
    <Avatar alt={fullname} sx={{ bgcolor: 'primary.light' }} src={user?.picture}>
      {user?.picture ?? `${user?.name[0]}${user?.surname[0]}`}
    </Avatar>
  )
}
