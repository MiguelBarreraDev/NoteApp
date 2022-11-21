import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/DriveFileRenameOutline'
import { Item } from '../Item'
import { useNotes } from '../../hooks'

function IconButton ({ children, handleClick }) {
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
      onClick={handleClick}
    >
      {children}
    </Box>
  )
}

export default function Note ({ note, categoryName }) {
  const { removeNote } = useNotes()

  const handleRemoveNote = () => {
    removeNote({
      categoryName,
      title: note.title
    })
  }

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
      <Typography sx={{ flex: 1, overflow: 'hidden' }}>{note.body}</Typography>
      <Box
        display='flex'
        justifyContent='flex-end'
        gap={1}
      >
        <IconButton><EditIcon /></IconButton>
        <IconButton handleClick={handleRemoveNote}><DeleteIcon /></IconButton>
      </Box>
    </Item>
  )
}
