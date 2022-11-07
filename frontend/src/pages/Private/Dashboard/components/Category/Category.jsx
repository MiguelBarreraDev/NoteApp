import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { List } from '../List'
import { Item } from '../Item'
import { Header } from '../Header'
import { Footer } from '../Footer'

export default function Category ({ name, notes }) {
  return (
    <Box
      sx={{
        bgcolor: '#B8C1EA',
        maxHeight: theme => `calc(100vh - ${theme.components.Header.height} - 32px)`,
        overflowY: 'hidden',
        height: 'fit-content',
        my: 2,
        px: 1,
        boxShadow: '0px 1px 4px #000a',
        minWidth: 300,
        maxWidth: 300,
        overflowX: 'hidden'
      }}
    >
      <Header title={name}/>
      <List>
        {notes.map(note => (
          <Item key={note?.title}>
            <Typography sx={{ fontSize: '1em', color: '#404040', fontWeight: 'bold' }}>{note.title}</Typography>
            <Typography>{note.body}</Typography>
          </Item>
        ))}
      </List>
      <Footer/>
    </Box>
  )
}
