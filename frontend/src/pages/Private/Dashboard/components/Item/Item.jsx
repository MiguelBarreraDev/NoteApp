import Paper from '@mui/material/Paper'
import { forwardRef } from 'react'

const Item = forwardRef((props, ref) => (
  <Paper
    ref={ref}
    sx={{
      borderRadius: 1,
      minHeight: 100
    }}
    elevation={2}
  >
    {props.children}
  </Paper>
))

Item.displayName = 'Item'

export default Item
