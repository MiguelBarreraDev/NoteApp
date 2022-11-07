import { forwardRef } from 'react'
import Stack from '@mui/material/Stack'

const List = forwardRef((props, ref) => (
  <Stack
    ref={ref}
    spacing={1}
    sx={{
      borderRadius: 0,
      overflowY: 'auto',
      maxHeight: theme => `calc(100vh - ${theme.components.Header.height} - 113px)`,
      bgcolor: 'transparent',
      pb: 1
    }}
  >
    {props.children}
  </Stack>
))

List.displayName = 'List'

export default List
