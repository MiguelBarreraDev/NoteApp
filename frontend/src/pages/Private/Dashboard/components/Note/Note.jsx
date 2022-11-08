import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/DriveFileRenameOutline'
import { Item } from '../Item'

function IconButton ({ children }) {
  return (
    <Box
      sx={{
        height: '24px',
        color: '#777',
        ':hover': {
          color: '#555'
        },
        cursor: 'pointer'
      }}
    >
      {children}
    </Box>
  )
}

export default function Note ({ note }) {
  return (
    <Item>
      <Typography
        sx={{
          fontSize: '1em',
          color: 'Text.light',
          fontWeight: 'bold'
        }}
      >
        {note.title}
      </Typography>
      <Typography sx={{ overflow: 'hidden' }}>{note.body}</Typography>
      <Box
        display='flex'
        justifyContent='flex-end'
        gap={1}
      >
        <IconButton><EditIcon /></IconButton>
        <IconButton><DeleteIcon /></IconButton>
      </Box>
    </Item>
  )
}
