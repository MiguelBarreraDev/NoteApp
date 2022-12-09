import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/Delete'
import { Item } from '../Item'
import { useNotes } from '../../hooks'
import { useDispatch } from 'react-redux'
import { updateError } from '@/redux/states'
import { EditNoteDialog } from './EditNoteDialog'

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
  const dispatch = useDispatch()

  const handleRemoveNote = () => {
    removeNote({
      categoryName,
      title: note.title
    })
    dispatch(updateError({
      active: true,
      id: `${categoryName}.${note.title}`,
      message: `The ${note.title} note successfully removed`,
      type: 'success'
    }))
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
      <Typography sx={{ color: '#404040', fontSize: '1em', flex: 1, overflow: 'hidden' }}>
        {note.body}
      </Typography>
      <Box
        display='flex'
        justifyContent='flex-end'
        gap={1}
      >
        <EditNoteDialog title={note?.title} body={note?.body} categoryName={categoryName} />
        <IconButton handleClick={handleRemoveNote}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Item>
  )
}
