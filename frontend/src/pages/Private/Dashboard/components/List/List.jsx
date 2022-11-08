import { forwardRef } from 'react'
import Stack from '@mui/material/Stack'

const List = forwardRef((props, ref) => (
  <Stack
    ref={ref}
    spacing={1}
    sx={{
      borderRadius: 0,
      overflowY: 'auto',
      bgcolor: 'transparent',
      pb: 1
    }}
  >
    {props.children}
  </Stack>
))

List.displayName = 'List'

export default List
