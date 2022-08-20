import Button from '@mui/material/Button'
import { NANavLink } from '../NANavLink'

export default function LinkButton ({ data }) {
  return (
    <Button>
      <NANavLink to={data.route}>
        {data.name}
      </NANavLink>
    </Button>
  )
}
