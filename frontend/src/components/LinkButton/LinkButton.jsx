import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export default function LinkButton (props) {
  const navigate = useNavigate()
  const { to, ...otherProps } = props

  return (
    <Button
      onClick={() => navigate(to)}
      {...otherProps}
    />
  )
}
