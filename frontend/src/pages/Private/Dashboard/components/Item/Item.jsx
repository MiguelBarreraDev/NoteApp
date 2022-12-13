import Paper from '@mui/material/Paper'
import { forwardRef } from 'react'

const Item = forwardRef((props, ref) => (
  <Paper
    ref={ref}
    sx={{
      borderRadius: 0,
      minHeight: 120,
      maxHeight: 120,
      overflow: 'hidden',
      px: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}
    elevation={1}
  >
    {props.children}
  </Paper>
))

Item.displayName = 'Item'

export default Item
